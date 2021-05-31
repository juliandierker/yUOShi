import React, { useCallback, useEffect, useMemo, useState } from "react";
import { StaticMemory } from "@xyng/yuoshi-backend-adapter";
import PromisifiedMeteor from "../../api/promisified";
import Icon from "../IconComponent/Icon";

import Swal from "sweetalert2";
import { useTasksContext } from "../student/TasksContext";

import "./RenderMemory.css";

export default function RenderMemory(props) {
  const { task, updateTask } = props;
  const { getSolution, setSolution } = useTasksContext();
  const [pairs, setPairs] = useState([]);
  const [items, setItems] = useState([]);
  const [item1, setItem1] = useState();
  const [item2, setItem2] = useState();

  useEffect(() => {
    setSolution(() => onSubmit);
  }, [pairs]);

  useEffect(() => {
    setItems(shuffle(task.items));
  }, []);

  const { columns, cardSize } = useMemo(() => {
    // setting some values needed for the calculation of the rows, columns, and the memory-card size
    const width = 720; // TODO: is there a way to get that size of the current component????
    const height = 348;
    const itemCount = task.items.length;
    // calculating number of rows and columns of the memory game
    const rows = Math.floor(Math.sqrt(itemCount));
    const columns = Math.ceil(itemCount / rows);

    // calculating size of the memory cards | applied to with and height of the cards
    const cardHeight = (height - 12 * (rows - 1)) / rows;
    const cardWidth = (width - 12 * (columns - 1)) / columns;
    const cardSize = Math.min(cardHeight, cardWidth);
    // returning all necessary data
    return {
      columns: columns,
      cardSize: cardSize
    };
  }, [task]);

  useEffect(() => {
    if (!item1 || !item2) {
      return;
    }

    const a = task.items.find((i) => i.id === item1);
    const b = task.items.find((i) => i.id === item2);

    flipCard(item1, item2);
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

  function shuffle(array) {
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
  }
  function flipCard(card1, card2) {
    let domItem1 = document.getElementById(card1);
    let domItem2 = document.getElementById(card2);

    if (!domItem1.classList.contains("picked")) {
      domItem1.classList.add("picked");
    }

    if (!card2) {
      return;
    }
    const itemObj1 = task.items.find((i) => i.id === item1);
    const itemObj2 = task.items.find((i) => i.id === item2);

    setTimeout(() => {
      if (itemObj1.category_id !== itemObj2.category_id) {
        domItem1?.classList.remove("picked");
        domItem2?.classList.remove("picked");
      }
    }, 1000);
  }

  const onClick = useCallback(
    (id) => () => {
      if (item1 === id || item2 === id) {
        return;
      }

      const item = task.items.find((i) => i.id === id);

      if (!item1) {
        flipCard(item.id);
        setItem1(item.id);
        return;
      }

      if (!item2) {
        flipCard(item.id);
        setItem2(item.id);
      }
      // flipCard(item1, item2);
    },
    [task, item1, item2]
  );
  const onSubmit = useCallback(async () => {
    const solutionCount = task.items.length / 2;
    if (solutionCount !== pairs.length) {
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
  }, [pairs, task]);

  return (
    <div className="workspace-memory-container">
      <div className="memory-container" style={{ width: cardSize * columns + 12 * columns }}>
        {items.map((item, index) => {
          return (
            <div
              className="memory-card"
              id={item.id}
              key={"memcard-" + index}
              onClick={onClick(item.id)}
              style={{ width: cardSize, height: cardSize, lineHeight: cardSize + "px" }}>
              <div className="front">{item.text}</div>
              <Icon className="back" name="logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
