/* eslint-disable react/prop-types */
import React, { useState, useCallback, useMemo, useEffect } from "react";
import ProgressBarSubItem from "./progressBarSubItem";
import Icon from "../IconComponent/Icon";
import PromisifiedMeteor from "../../api/promisified";
import "./progressBarItem.css";

export default function ProgressBarItem({ station, highlighted, currentTask, setCurrentStation }) {
  const { tasks, locked, name } = station;
  const [hover, setHover] = useState(false);
  const [hoverSubArea, setHoverSubArea] = useState(false);
  const [taskSolutions, setTaskSolutions] = useState([]);
  const [taskSolutionsSet, setTaskSolutionsSet] = useState(false);
  const handleItemEnter = () => {
    setHover(true);
  };
  const handleItemLeave = () => {
    setHover(false);
  };
  const handleSubAreaEnter = () => {
    setHoverSubArea(true);
  };

  const handleSubAreaLeave = () => {
    setHoverSubArea(false);
  };

  const RenderSubItems = useCallback(() => {
    return (
      <div className="dummy">
        <div
          className="progressBar-sub-items"
          onMouseEnter={handleSubAreaEnter}
          onMouseLeave={handleSubAreaLeave}>
          {tasks.map((station, index) => {
            return (
              <ProgressBarSubItem
                key={"progressBarSubItem_" + index}
                type={station.type}
                id={station.id}
                title={station.name}
                highlighted={currentTask && station.id === currentTask.id}
              />
            );
          })}
        </div>
      </div>
    );
  }, [currentTask?.id, tasks]);

  const iconColor = hover || hoverSubArea || highlighted ? "white" : "black";

  let icon = <div />;
  icon = tasks && tasks.length != 0 ? <Icon name="bars" size="large" color={iconColor} /> : icon;
  icon = locked ? <Icon name="lock-locked" size="large" color={iconColor} /> : icon;

  let pbClassname = highlighted ? "progressBar-item-highlighted" : "progressBar-item";
  if (hover || hoverSubArea) {
    pbClassname =
      tasks && tasks.length != 0 ? "progressBar-item-hover-tasks" : "progressBar-item-hover";
  }

  async function getSolutions() {
    return await PromisifiedMeteor.call("tasks.getAllSolution", (err, res) => {
      if (err) {
        console.log(err);
      } else {
        return res;
      }
    })
  }

  useEffect(() => {
    if (!taskSolutionsSet) {
      getSolutions().then(res => {
        setTaskSolutions(res);
        setTaskSolutionsSet(true);
      });
    }

  }, [tasks])

  const getStationSolvedStatus = () => {
    if (!tasks) return "progressBar-item-notSolved";
    tasks.map(task => {
      const taskSol = taskSolutions.find(solution => {
        return solution.task_id == task.id
      });
      if (taskSol !== undefined) {
        task.solved = !!taskSol.contents.points > 0 ? true : false
      }
      // task.solved = taskSolutions.find(solution => solution.task_Id === task.id && solution.contents.finished !== null) ? true : false;

    });

    if (tasks.every(task => task.solved)) {
      return "progressBar-item-solved";
    }
    if (tasks.some(task => task.solved)) return "progressBar-item-inProgress";
    return "progressBar-item-notStarted";
  }

  return (
    <React.Fragment>
      <div
        className={pbClassname}
        onMouseEnter={handleItemEnter}
        onMouseLeave={handleItemLeave}
        onClick={() => (station.tasks ? null : setCurrentStation(station))}>
        <div className={"bubble " + getStationSolvedStatus()} />
        <span className="progressBar-item-name">{name}</span>
        <div className="progressBar-item-icon">{icon}</div>
      </div>
      {(hover || hoverSubArea) && tasks && <RenderSubItems />}
    </React.Fragment>
  );
}
