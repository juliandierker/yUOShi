/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

import ProgressBarItem from "./progressBarItem";

import "./progressBar.css";
import { usePrevious } from "../../shared/customHooks";
import Swal from "sweetalert2";

/**
 * Render Progressbar
 *
 * @returns {ReactElement | null}
 */
export default function ProgressBar(props) {
  const { currentPackage, stations, currentStation, currentTask, score } = props;
  const prevScore = usePrevious(score);
  let maxCredits = 0;

  useEffect(() => {
    if (prevScore && score > prevScore) {
      Swal.fire({
        position: "top-end",
        type: "success",
        title: "Es wurden Punkte gutgeschrieben.",
        timer: 2000
      });
    }
  }, [prevScore, score]);
  const data = {
    package: {
      name: currentPackage.title,
      stations: stations.map((station) => {
        return {
          name: station.title,
          id: station.id,
          tasks: station.tasks.map((task) => {
            maxCredits += task.credits;
            return {
              name: task.title,
              type: task.type,
              id: task.id
            };
          })
        };
      })
    }
  };

  const RenderTitle = ({ title }) => {
    return (
      <div className="progressBar-header">
        <span className="progressBar-header-name">{title}</span>
      </div>
    );
  };

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

  const RenderStations = () => {
    return (
      <div className="progressBar-content">
        {data.package.stations.map((data, index) => {
          return (
            <ProgressBarItem
              key={"progressBarItem_" + index}
              data={data}
              index={index}
              highlighted={data.id === currentStation.id}
              currentTask={currentTask}
            />
          );
        })}
        <RenderScore />
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="progressBar-container">
        <RenderTitle title={data.package.name} />
        <RenderStations />
      </div>
    </React.Fragment>
  );
}
