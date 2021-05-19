import React, { useCallback, useEffect, useMemo, useState } from "react"
import { StaticMemory } from "@xyng/yuoshi-backend-adapter";
import PromisifiedMeteor from "../../api/promisified";
import Icon from "../IconComponent/Icon"

import Swal from "sweetalert2";
import { useTasksContext } from "../student/TasksContext";

import "./RenderMemory.css"

/**
 * Render a Memory-Task
 *
 * @param {RenderMemoryProps} props
 * @returns {React.ReactElement|null}
 */
export default function RenderMemory(props) {
  const { task, updateTask } = props
  const { submitted, setSubmitted } = useState(false)
  const { getSolution, setSolution } = useTasksContext();

  useEffect(() => {
    setSolution(() => onSubmit);
  }, []);

  const { columns, cardSize } = useMemo(() => {

    // setting some values needed for the calculation of the rows, columns, and the memory-card size
    const width = 720; // TODO: is there a way to get that size of the current component????
    const height = 348;
    const itemCount = task.items.length
    // calculating number of rows and columns of the memory game
    const rows = Math.floor(Math.sqrt(itemCount))
    const columns = Math.ceil(itemCount / rows);

    // calculating size of the memory cards | applied to with and height of the cards
    const cardHeight = (height - (12 * (rows - 1))) / rows
    const cardWidth = (width - (12 * (columns - 1))) / columns
    const cardSize = Math.min(cardHeight, cardWidth)
    // returning all necessary data 
    return {
      columns: columns,
      cardSize: cardSize
    }
  }, [task])

  let currentTarget = null;
  let locked = false // mutex lock, only allow one card pair to be selected at once

  const onClick = (event) => {
    // set correct target for validation
    let target = event.target;
    if (target.classList.contains("front") || target.classList.contains("back")) {
      target = target.parentNode
    }
    if (target.classList.contains("picked") || locked) return
    locked = true
    // add className picked
    target.classList.add("picked")
    // check if another card has been clicked, if not only set the current card to picked
    if (currentTarget === null) {
      currentTarget = target;
      locked = false
      return
    }

    // if another card has been picked already, check if they dont have the same category
    setTimeout(() => {
      if (target.id !== currentTarget.id) {
        // remove the picked classname from the two picked cards
        target.classList.remove("picked")
        currentTarget.classList.remove("picked")
      } else {
        // if the two picked cards are the same, increase the correctCount and set the matched className 
        correctCount++
      }
      currentTarget = null
      locked = false

      // check if memory is finished finished
      const itemCount = task.items.length
      // if (correctCount >= itemCount / 2) {
      //   onSubmit()
      // }
    }, 1000)
  }

  const RenderMemoryCards = () => {

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
    };

    const shuffledItems = shuffle(task.items);

    return shuffledItems.map((item, index) => {
      return (
        <div
          className="memory-card"
          id={"card" + item.category_id}
          key={"memcard-" + index}
          onClick={onClick}
          style={{ width: cardSize, height: cardSize, lineHeight: cardSize + "px" }}>
          <div className="front">{item.text}</div>
          <Icon className="back" name="logo" />
        </div>
      );
    });
  };

  const onSubmit = useCallback(async () => {
    if (submitted) {
      await Swal.fire({
        position: "top-end",
        type: "warning",
        title: "Das Memory muss vollständig gelöst werden.",
        timer: 2000
      });
      return;
    }
    const result = await PromisifiedMeteor.call("tasks.checkAnswer", task.id, []);
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

    if (!submitted) {
      setSubmitted(true);
    }
  }, [submitted, task]);

  return (
    <div className="workspace-memory-container">
      <div className="memory-container" style={{ width: cardSize * columns + 12 * columns }}>
        <RenderMemoryCards></RenderMemoryCards>
      </div>
    </div>
  );
}
