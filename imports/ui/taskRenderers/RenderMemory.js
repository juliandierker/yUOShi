import React, { useCallback, useEffect, useState } from "react";
import { StaticMemory } from "@xyng/yuoshi-backend-adapter";
import PromisifiedMeteor from "../../api/promisified";
import { Button, Card, CardContent, Grid, GridColumn, Input } from "semantic-ui-react";

import Swal from "sweetalert2";
import { useTasksContext } from "../student/TasksContext";

/** @type React.CSSProperties */
const memoryItemStyle = {
  height: "100px"
};

/**
 * @typedef RenderMemoryProps
 * @property {StaticMemory} task
 */

/**
 * Render a Memory-Task
 *
 * @param {RenderMemoryProps} props
 * @returns {React.ReactElement|null}
 */
export default function RenderMemory(props) {
  const { task } = props;
  const { getSolution, setSolution } = useTasksContext();
  const [pairs, setPairs] = useState([]);
  const [item1, setItem1] = useState();
  const [item2, setItem2] = useState();
  const [submitted, setSubmitted] = useState(false);

  const done = pairs.length === task.items.length / 2;
  useEffect(() => {
    setSolution(() => onSubmit);
  }, [pairs]);

  useEffect(() => {
    if (!item1 || !item2) {
      return;
    }

    const a = task.items.find((i) => i.id === item1);
    const b = task.items.find((i) => i.id === item2);

    setItem1(undefined);
    setItem2(undefined);

    if (!a || !b) {
      return;
    }

    if (a.id === b.id) {
      return;
    }

    if (a.category_id !== b.category_id) {
      return;
    }

    setPairs((pairs) => {
      return [
        ...pairs,
        {
          a: a.id,
          b: b.id
        }
      ];
    });
  }, [item1, item2, task]);

  const onClick = useCallback(
    (id) => () => {
      if (item1 && item2) {
        return;
      }

      if (item1 === id || item2 === id) {
        // already selected
        return;
      }

      const item = task.items.find((i) => i.id === id);

      if (!item1) {
        setItem1(item.id);
        return;
      }

      if (!item2) {
        setItem2(item.id);
      }
    },
    [task, item1, item2]
  );

  const onSubmit = useCallback(async () => {
    if (!done || submitted) {
      await Swal.fire({
        position: "top-end",
        type: "warning",
        title: "Das Memory muss vollständig gelöst werden.",
        timer: 2000
      });
      return;
    }
    const result = await PromisifiedMeteor.call(
      "tasks.checkAnswer",
      task.id,
      pairs.map((pair) => {
        return {
          a: task.items.find((i) => i.id === pair.a),
          b: task.items.find((i) => i.id === pair.b)
        };
      })
    );
    if (!result) {
      // TODO: handle error
      return;
    }

    if (!result.quest_solutions.find((solution) => solution.is_correct == false)) {
      await Swal.fire({
        position: "top-end",
        type: "success",
        title: "Geschafft!",
        timer: 2000
      });
    } else {
      await Swal.fire({
        position: "top-end",
        type: "warning",
        title: "Bei der Lösungsabfrage ist etwas schief gelaufen.",
        timer: 2000
      });
    }

    setSubmitted(true);
  }, [submitted, done, pairs, task]);

  return (
    <div>
      <Grid>
        {task.items.map((item) => {
          const found = pairs.find(({ a, b }) => a === item.id || b === item.id);
          const selected = item1 === item.id || item2 === item.id;
          return (
            <GridColumn key={`item-${item.id}`} width="eight">
              <Card>
                <CardContent>
                  {!found && !selected && <Button onClick={onClick(item.id)}>Aufdecken</Button>}
                  {(found || selected) && (
                    <div style={memoryItemStyle}>
                      {item.text}
                      {item.image}
                    </div>
                  )}
                </CardContent>
              </Card>
            </GridColumn>
          );
        })}
      </Grid>
    </div>
  );
}
