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
  console.log(props);
  // temporary data !!! needs to be replaced with props data
  const data = {
    package: {
      name: "Motivation",
      subPackages: [
        {
          name: "Intro"
        },
        {
          name: "Motivationsbegriff",
          tasks: [
            {
              name: "Intrinsische und extrinsische Motivation",
              type: "Lückentext"
            },
            {
              name: "Intrinsische und extrinsische Motivation",
              type: "Lückentext"
            }
          ]
        },
        {
          name: "Humanistische Theorien",
          tasks: [
            {
              name: "Maslow Bedürfnisspyramide",
              type: "Lückentext"
            },
            {
              name: "Maslow Bedürfnisspyramide",
              type: "Lückentext"
            },
            {
              name: "Maslow Bedürfnisspyramide",
              type: "Lückentext"
            },
            {
              name: "Maslow Bedürfnisspyramide",
              type: "Lückentext"
            },
            {
              name: "Maslow Bedürfnisspyramide",
              type: "Lückentext"
            }
          ]
        },
        {
          name: "Kognitive Theorien",
          tasks: [
            {
              name: "Erwartungs-X-Wert Theorie",
              type: "Lückentext"
            },
            {
              name: "Erwartungs-X-Wert Theorie",
              type: "Lückentext"
            },
            {
              name: "Erwartungs-X-Wert Theorie",
              type: "Lückentext"
            },
            {
              name: "Erwartungs-X-Wert Theorie",
              type: "Lückentext"
            }
          ]
        },
        {
          name: "Ziele",
          tasks: [
            {
              name: "Zielsetzungstheorie",
              type: "memory"
            },
            {
              name: "Zielsetzungstheorie",
              type: "tag"
            },
            {
              name: "Zielsetzungstheorie",
              type: "multi"
            },
            {
              name: "Zielsetzungstheorie",
              type: "cloze"
            }
          ]
        },
        {
          name: "Quest",
          locked: true
        }
      ]
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
        <p className="progressBar-score-number">50/100</p>
        <p className="progressBar-score-label">Gesammelte Punkte</p>
      </div>
    );
  };

  const RenderSubPackages = () => {
    return (
      <div className="progressBar-content">
        {data.package.subPackages.map((data, index) => {
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
        <RenderSubPackages />
      </div>
    </React.Fragment>
  );
}
