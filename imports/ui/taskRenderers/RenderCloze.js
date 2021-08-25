import React, { useCallback, useState, useEffect, useMemo } from "react";
import PromisifiedMeteor from "../../api/promisified";

import Swal from "sweetalert2";
import { useTasksContext } from "../student/TasksContext";
import "./RenderCloze.css";
import * as PropTypes from "prop-types";

// Fisher--Yates shuffle Algorithm
const shuffle = (array) => {
  let counter = array.length,
    temp,
    index;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

/**
 * Render a Cloze-Task
 *
 * @param {{name: string, answers: any[]}} props
 * @returns {React.ReactElement|null}
 */
const RenderDropdownInput = ({ name, answers }) => {
  const options = useMemo(() => {
    return shuffle(
      answers.map((data, index) => {
        return {
          data,
          _key: `${name}-${index}`
        };
      })
    );
  }, [name, answers]);

  return (
    <select className="cloze-answers-dropdown" id={name} name={name}>
      {options.map((option) => (
        <option key={`${option._key}`} value={option.data}>
          {option.data}
        </option>
      ))}
    </select>
  );
};

const RenderClozeContent = ({ content }) => {
  const answers = useMemo(() => {
    return content.values
      .map((answerString) => {
        if (answerString) {
          return answerString.split(";");
        }

        return [];
      })
      .reduce((acc, answers) => {
        return [...acc, ...answers];
      }, []);
  }, [content]);

  return content.parts.map(({ id: inputId, content: partContent, name }, index) => {
    return (
      <React.Fragment key={"cloze-content-" + index}>
        <span>{partContent}</span>
        {answers.length > 0 && (
          <RenderDropdownInput name={content.id + "-" + inputId} answers={answers} />
        )}
        {name === "image" && inputId && <img alt={"Image " + index} />}
      </React.Fragment>
    );
  });
}

RenderClozeContent.propTypes = {
  content: PropTypes.shape({
    parts: PropTypes.arrayOf(PropTypes.any)
  })
};

/**
 * Render a Cloze-Task
 *
 * @param {RenderClozeProps} props
 * @returns {React.ReactElement|null}
 */
export default function RenderCloze(props) {
  const { task } = props;
  const { setSolution } = useTasksContext();
  const [userSolution, setUserSolution] = useState({});
  const [done, setDone] = useState(false);

  const handleFormChange = useCallback((event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formEntries = formData.entries();

    const solutions = {};
    for (const [key, value] of formEntries) {
      const [id, inputId] = key.split("-");
      solutions[id] = solutions[id] || {};

      solutions[id][inputId] = value;
    }

    setUserSolution(solutions);
  }, []);

  /** @type React.FormEventHandler<HTMLFormElement> */
  const onSubmit = useCallback(async () => {
    const formData = new FormData(document.getElementById("cloze-form"));
    const formEntries = formData.entries();

    const solutions = {};
    for (const [key, value] of formEntries) {
      const [id, inputId] = key.split("-");
      solutions[id] = solutions[id] || {};

      solutions[id][inputId] = value;
    }
    console.log(task);
    const result = await PromisifiedMeteor.call(
      "tasks.checkCloze",
      task.id,
      Object.entries(solutions).map(([id, inputs]) => {
        return {
          id,
          inputs
        };
      })
    );

    if (!result) {
      // TODO: handle error
      // (cloze-task answers cannot be validated by server, so an empty result indicates a server error)
      return;
    }

    await Swal.fire({
      position: "top-end",
      type: "success",
      title: "Geschafft!",
      timer: 2000
    });
    setDone(true);
  }, [task]);

  useEffect(() => {
    setSolution(() => onSubmit);
  }, [setSolution, userSolution, onSubmit]);

  return (
    <div className="cloze-container">
      <form onChange={handleFormChange} id="cloze-form">
        <div className="cloze-text">
          {task.contents.map((content) => {
            return <RenderClozeContent content={content} key={`content-${content.id}`} />;
          })}
        </div>
      </form>
    </div>
  );
}
