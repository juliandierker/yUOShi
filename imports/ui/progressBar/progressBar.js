/* eslint-disable react/prop-types */
import React from "react";

import ProgressBarItem from "./progressBarItem";

import "./progressBar.css";

/**
 * Render Progressbar
 *
 * @returns {ReactElement | null}
 */
export default function ProgressBar(props) {
  const { currentPackage, stations } = props;

  let maxCredits = 0;

  const data = {
    package: {
      name: currentPackage.title,
      stations: stations.map(station => {
        return {
          name: station.title,
          tasks: station.tasks.map(task => {
            maxCredits += task.credits
            return {
              name: task.title,
              type: task.type
            }
          })
        }
      })
    }
  }

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
        <p className="progressBar-score-number">0/{maxCredits}</p>
        <p className="progressBar-score-label">Gesammelte Punkte</p>
      </div>
    );
  };

  const RenderStations = () => {
    return (
      <div className="progressBar-content">
        {data.package.stations.map((data, index) => {
          return <ProgressBarItem key={"progressBarItem_" + index} data={data} index={index} />;
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
