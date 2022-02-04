/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import ProgressBarItem from "./progressBarItem";
import ProgressBarSubItem from "./progressBarSubItem";

import "./progressBar.css";
import PromisifiedMeteor from "../../api/promisified";
/**
 * Render Progressbar
 *
 * @returns {ReactElement | null}
 */
export default function ProgressBar(props) {
  const {
    currentPackage,
    stations,
    currentStation,
    currentTask,
    score,
    jumpToTask,
    setCurrentStation
  } = props;
  const [packageData, setPackageData] = useState({});
  const [maxCredits, setMaxCredits] = useState(0);
  const [taskSolutions, setTaskSolutions] = useState([]);
  const [isTaskSolutionsSet, setIsTaskSolutionsSet] = useState(false);

  async function getSolutions() {
    return await PromisifiedMeteor.call("tasks.getAllSolution", (err, res) => {
      if (err) {
        console.log(err);
      } else {
        return res;
      }
    });
  }

  // mounting effect to set the package data
  useEffect(() => {
    if (!isTaskSolutionsSet) {
      getSolutions().then(res => {
        setTaskSolutions(res);
        setIsTaskSolutionsSet(true);
        // TODO: set solutions for each task
        let mCred = 0;
        const data = {
          package: {
            name: currentPackage.title,
            stations: stations.map((station) => {
              if (station.id === "generated__outro") {
                station.questStations.map((stat) => {
                  stat.tasks.map((task) => {
                    mCred += task.credits
                  })
                })
              }
              return {
                name: station.title,
                id: station.id,
                tasks: station.tasks?.map((task) => {
                  // TODO: add solved flag
                  const taskSol = res.find(solution => {
                    return solution.task_id === task.id;
                  })
                  mCred += task.credits;
                  return {
                    name: task.title,
                    type: task.type,
                    id: task.id,
                    solved: taskSol === undefined ? false : !!taskSol.contents.points > 0 ? true : false,
                  };
                })
              };
            })
          }
        }
        setMaxCredits(mCred)
        setPackageData(data);
      })
    }

  }, [])

  const getStationSolvedStatus = (station) => {
    if (!station || !station.tasks) return "not-started";
    // check if every task from station.tasks is solved
    const isFullySolved = station.tasks.every(task => {
      return task.solved;
    })
    if (isFullySolved) return "solved";
    // check if any task from station.tasks is solved
    const isPartiallySolved = station.tasks.some(task => {
      return task.solved;
    })
    if (isPartiallySolved) return "partial";
    return "not-started";
  }

  const RenderScore = () => {
    return (
      <div className="progressBar-score">
        <p className="progressBar-score-number">
          {score}/{maxCredits}
        </p>
        <p className="progressBar-score-label">Gesammelte Punkte</p>
      </div>
    );
  };

  const RenderProgress = () => {
    const percentage = (score / maxCredits) * 100;
    return <div className="progressBar-progress-container">
      <div style={{ width: percentage + "%" }} className="progressBar-progress" />
    </div>
  }

  const RenderStations = () => {
    if (!packageData || !packageData.package) return <div></div>
    return packageData?.package?.stations.map((station, index) => {
      return (
        <ProgressBarItem
          key={"progressBarItem_" + index}
          station={station}
          solved={getStationSolvedStatus(station)}
          index={index}
          highlighted={station.id === currentStation.id}
          currentTask={currentTask}
          jumpToTask={jumpToTask}
          setCurrentStation={setCurrentStation}
        >
        </ProgressBarItem>
      );
    })
  };

  return (
    <React.Fragment>
      <div className="progressBar-container">
        <div className="progressBar-header">
          <span className="progressBar-header-name">{packageData?.package?.name}</span>
        </div>
        <div className="progressBar-content">
          <RenderProgress />
          <RenderStations />
          <RenderScore />
        </div>
      </div>
    </React.Fragment>
  );
}
