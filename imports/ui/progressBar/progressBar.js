/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import ProgressBarItem from "./progressBarItem";
import ProgressBarSubItem from "./progressBarSubItem";

import "./progressBar.css";
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

  // mounting effect to set the package data
  useEffect(() => {
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
              mCred += task.credits;
              return {
                name: task.title,
                type: task.type,
                id: task.id
              };
            })
          };
        })
      }
    }
    setMaxCredits(mCred)
    setPackageData(data);
  }, [])

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
