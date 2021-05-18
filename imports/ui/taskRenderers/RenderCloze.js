import React, { useCallback, useState, useEffect } from "react";
import { StaticCloze } from "@xyng/yuoshi-backend-adapter";
import PromisifiedMeteor from "../../api/promisified";

import Swal from "sweetalert2";
import { useTasksContext } from "../student/TasksContext";
import "./RenderCloze.css"

// Fisher--Yates shuffle Algorithm
const shuffle = (array) => {
  let counter = array.length, temp, index;
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
}

/**
 * Render a Cloze-Task
 *
 * @param {RenderClozeProps} props
 * @returns {React.ReactElement|null}
 */
export default function RenderCloze(props) {
  const { task } = props;
  const { getSolution, setSolution } = useTasksContext();

  const [done, setDone] = useState(false);

  useEffect(() => {
    setSolution(() => onSubmit);
  }, []);

  /** @type React.FormEventHandler<HTMLFormElement> */
  const onSubmit = useCallback(async () => {
    const formData = new FormData(document.getElementById("clozeForm"));
    const formEntries = formData.entries();

    const solutions = {};
    for (const [key, value] of formEntries) {
      const [id, inputId] = key.split("-");
      solutions[id] = solutions[id] || {};

      solutions[id][inputId] = value;
    }

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

  const RenderDropdownInput = ({ name, answers }) => {

    let options = shuffle(answers.map((data, index) => {
      return <option key={"answer-" + name + "-" + index} value={data}>{data}</option>
    }))


    return <select className="cloze-answers-dropdown" id={name} name={name}>
      {options}
    </select>

  }

  return <div className="cloze-container">
    <form >
      <div className="cloze-text">
        {task.contents.map((content) => {

          return content.parts.map(({ id: answerString, content: partContent, name }, index) => {
            let answers = []
            if (answerString && name === "input") {
              answers = answerString.split(";")
            }
            return <React.Fragment key={"cloze-content-" + index}>
              <span>{partContent}</span>
              {answers.length > 0 && <RenderDropdownInput name={content.id + "-" + index} answers={answers} />}
              {name === "image" && answerString && <img alt={"Image " + index} />}
            </React.Fragment>
          })
        })}
      </div>
    </form>
  </div>
}
