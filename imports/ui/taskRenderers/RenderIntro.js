import React, { useMemo, useState, useEffect, useRef } from "react";
import PromisifiedMeteor from "../../api/promisified";

import Icon from "../IconComponent/Icon";

import "./RenderIntro.scss";

function RenderIntro({ learningObjectives }) {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const [images, setImages] = useState([]);

  const studipUrl = useRef();
  Meteor.call("users.getStudipUrl", (err, res) => {
    if (res) studipUrl.current = res;
  });
  const learningObjective = useMemo(() => {
    return learningObjectives[currentPersonIndex];
  }, [learningObjectives, currentPersonIndex]);
  const { title, description } = learningObjective;
  // handle button click to show the next student
  const showNextStudent = () => {
    if (currentPersonIndex >= learningObjectives.length - 1) return;
    setCurrentPersonIndex(currentPersonIndex + 1);
  };

  useEffect(() => {
    async function loadImages() {
      const currentImages = await PromisifiedMeteor.call("files.getFile", learningObjective.image);
      const newImages = images;
      newImages.push(currentImages);
      setImages(newImages);
    }
    loadImages();
  }, [learningObjective]);

  // handle button click to show the previous student
  const showPreviousStudent = () => {
    if (currentPersonIndex <= 0) return;
    setCurrentPersonIndex(currentPersonIndex - 1);
  };
  // render information of a student
  const RenderPerson = () => {
    let fileId = "";
    let fileName = "";
    if (images.length) {
      fileId = images[currentPersonIndex].id;
      fileName = images[currentPersonIndex].name;
    }
    return (
      <div className="person-container">
        <div className="person-overview">
          <div className="person-icon">
            <img
              src={`${studipUrl.current}/sendfile.php?type=0&file_id=${fileId}&;file_name=${fileName}`}
              type="image/png"></img>
          </div>
          <div className="person-data">
            <div className="person-name">{title}</div>
          </div>
        </div>
        <div className="person-text-container">
          <div className="person-text">{description}</div>
        </div>
      </div>
    );
  };

  // render basic Intro scaffolding
  return (
    <div className="intro-container">
      <div className="intro-title-container">
        <div className="intro-title">{title}</div>
      </div>
      <RenderPerson />
      <div className="intro-navigation">
        <button className="intro-navigation-button" onClick={showPreviousStudent}>
          <Icon name="angle-left" />
        </button>
        <div className="intro-navigation-label-current">
          {"Schüler:in " + (currentPersonIndex + 1) + " von " + learningObjectives.length}
        </div>
        <button className="intro-navigation-button" onClick={showNextStudent}>
          <Icon name="angle-right" />
        </button>
      </div>
    </div>
  );
}

export default RenderIntro;
