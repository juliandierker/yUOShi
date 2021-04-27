import React, { useCallback, useState, useEffect } from "react";
import { StaticCloze } from "@xyng/yuoshi-backend-adapter";
import PromisifiedMeteor from "../../api/promisified";
import { Button, Input } from "semantic-ui-react";

import Swal from "sweetalert2";
import { useTasksContext } from "../student/TasksContext";

/**
 * @typedef RenderClozeProps
 * @property {StaticCloze} task
 */

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
  }, [done]);

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

  return (
    <div className="render_card_wrapper">
      <form id="clozeForm">
        <div>
          {task.contents.map((content) => {
            return content.parts.map(({ id: partExtId, content: partContent, name }, index) => {
              return (
                <React.Fragment
                  key={`content-${content.id}-${name}-${partExtId || `index-${index}`}`}>
                  <span>{partContent}</span>
                  {name === "input" && partExtId && (
                    <Input name={`${content.id}-${partExtId}`} type="text" />
                  )}
                  {name === "image" && partExtId && <img alt={`Image ${partExtId}`} />}
                  {partContent.includes("\n") && <br />}
                </React.Fragment>
              );
            });
          })}
        </div>
      </form>
    </div>
  );
}
