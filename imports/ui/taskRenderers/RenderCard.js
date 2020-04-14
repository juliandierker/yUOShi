import React, { useCallback, useState } from "react";
import { StaticCard } from "@xyng/yuoshi-backend-adapter";
import PromisifiedMeteor from "../../api/promisified";
import FullEditor from "../tasks/texteditor/FullEditor";
import { Button, Card, Grid, GridColumn, GridRow } from "semantic-ui-react";
import "./RenderCard.css";
import Swal from "sweetalert2";

/**
 * @typedef RenderCardProps
 * @property {StaticCard} task
 * @property {Function} updateTask
 */

/**
 * Render a MultiTask
 *
 * @param {RenderCardProps} props
 * @returns {ReactElement|null}
 */
export default function RenderTag(props) {
  const { task, updateTask } = props;
  const [userSolution, setUserSolution] = useState({});
  const [done, setDone] = useState(false);

  const onChangeTopicText = useCallback(
    (id) => (event, editor) => {
      setUserSolution((userSolution) => {
        return {
          ...userSolution,
          [id]: editor.getData()
        };
      });
    },
    []
  );

  const onSubmit = useCallback(async () => {
    const solutions = Object.entries(userSolution).map(([key, value]) => {
      return {
        topic_id: key,
        value
      };
    });

    const result = await PromisifiedMeteor.call("tasks.checkAnswer", task.id, solutions);

    if (!result) {
      // TODO: handle error
      // (card-task answers cannot be validated by server, so an empty result indicates a server error)
      return;
    }

    await Swal.fire({
      position: "top-end",
      type: "success",
      title: "Geschafft!",
      timer: 2000
    });
    setDone(true);
  }, [task, userSolution]);

  return (
    <div className="render_card_wrapper">
      <RenderButton done={done} onNext={updateTask} onSubmit={onSubmit} />
      <Grid>
        <GridRow>
          {task.topics.map((topic) => {
            const topicSolution = userSolution[topic.id] || "";
            return (
              <GridColumn width="8" key={`task-${topic.id}`}>
                <h2>{topic.title}</h2>
                <p>{topic.content}</p>

                <h3>Definition:</h3>
                <FullEditor
                  name="example"
                  onChange={onChangeTopicText(topic.id)}
                  value={topicSolution}
                />
              </GridColumn>
            );
          })}
        </GridRow>
      </Grid>
      <RenderButton done={done} onNext={updateTask} onSubmit={onSubmit} />
    </div>
  );
}

const RenderButton = ({ done, onNext, onSubmit }) => {
  if (done) {
    return <Button onClick={onNext}>Weiter</Button>;
  }

  return <Button onClick={onSubmit}>Aufgabe lösen</Button>;
};
