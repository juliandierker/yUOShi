import React, { useCallback, useEffect, useState, useMemo } from "react";
import Swal from "sweetalert2";
import PromisifiedMeteor from "../../api/promisified";

import { useTasksContext } from "../student/TasksContext";

import "./RenderMulti.css";

/** @type React.FC */
const RenderQuest = ({ task }) => {
  const question = task.contents[0];
  const { getSolution, setSolution } = useTasksContext();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [userSolutionId, setUserSolutionId] = useState();

  useEffect(() => {
    setSolution(() => onSubmit);
  }, [selectedAnswers]);

  const getNextQuest = useCallback(async () => {
    if (!task) {
      return;
    }

    const data = await PromisifiedMeteor.call(
      "tasks.getCurrentTaskPosition",
      task.id,
      userSolutionId
    );

    if (!data) {
      // TODO: handle error
      return;
    }

    const { id, current_quest } = data;
    // onGetNextQuest(data);

    if (!current_quest) {
      return;
    }

    setUserSolutionId(id);
  }, [task, userSolutionId]);

  useEffect(() => {
    getNextQuest();
  }, [getNextQuest]);

  const onSubmit = useCallback(async () => {
    if (!question) {
      return;
    }
    const givenAnswers = selectedAnswers[question.id].map((answer) => {
      return {
        quest_id: question.id,
        content_id: question.content_id,
        answer_id: answer
      };
    });

    try {
      const result = await PromisifiedMeteor.call("tasks.checkQuest", question.id, givenAnswers);
      if (result.is_correct) {
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
          title: "Die Lösung war nicht richtig. Du kannst es noch einmal probieren.",
          timer: 2000
        });
      }
    } catch (e) {
      await Swal.fire({
        position: "top-end",
        type: "info",
        title: "Die wurde schon gelöst.",
        timer: 2000
      });
    }
  }, [selectedAnswers]);

  const toggleAnswer = useCallback(
    (question_id, answer_id) => () => {
      setSelectedAnswers((cur) => {
        let selected = cur[question_id] || [];

        if (!selected.includes(answer_id)) {
          selected = [...selected, answer_id];
        } else {
          selected = selected.filter((id) => id !== answer_id);
        }

        return {
          ...cur,
          [question_id]: selected
        };
      });
    },
    []
  );

  const renderAnswers = () => {
    return question.answers.map((answer, index) => {
      return (
        <div className="answer-container" key={"answer-" + index} onClick={toggleAnswer(question.id, answer.id)}>
          <input
            name={"checkbox_" + index}
            id={"checkbox_" + answer.id}
            type="checkbox"
            className="answer-checkbox"
            checked={selectedAnswers[question.id] && selectedAnswers[question.id].includes(answer.id)}
          />
          <label htmlFor={"checkbox_" + index} className="answer">
            {answer.content}
          </label>
        </div>
      );
    });
  };

  return (
    <>
      <div className="question-container">{question !== undefined && question.question}</div>
      <div className="answers-container">{renderAnswers()}</div>
    </>
  );
};

export default RenderQuest;
