import React, { useCallback, useEffect, useState, useMemo } from "react";
import PromisifiedMeteor from "../../api/promisified";

import { useTasksContext } from "../student/TasksContext";

import "./RenderMulti.css";

/** @type React.FC */
const RenderQuest = ({ task }) => {
  console.log(task);
  const question = task.contents[0];
  const { getSolution, setSolution } = useTasksContext();

  const [userSolutionId, setUserSolutionId] = useState();

  useEffect(() => {
    setSolution(() => onSubmit);
  }, []);

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

  const selectedAnswers = useMemo(() => {
    if (!question) {
      return [];
    }
    return [];
  }, [question]);

  const onSubmit = useCallback(async () => {
    // get all needed parts to submit the answer
    const contentId = question.content_id;
    const questId = question.id;
    let answersGiven = [];

    let answers = document.getElementsByClassName("answer-checkbox");
    for (let i in answers) {
      if (answers[i].checked) {
        const answerId = answers[i].id.replace("checkbox_", "");
        answersGiven.push({
          answer_id: answerId,
          content_id: contentId,
          quest_id: questId
        });
      }
    }
    const result = await PromisifiedMeteor.call("tasks.checkQuest", question.id, answersGiven);

    const givenAnswers = selectedAnswers.map((answer) => {
      return {
        quest_id: question.id,
        content_id: question.content_id,
        answer_id: answer
      };
    });

    if (question.custom_answer) {
      givenAnswers.push({
        quest_id: question.id,
        content_id: question.content_id,
        custom: customAnswer
      });
    }
    if (!result) {
      // TODO: handle error
    }
    setDone(true);
  }, [getNextQuest]);

  const renderAnswers = () => {
    return question.answers.map((answer, index) => {
      return (
        <div className="answer-container" key={"answer-" + index}>
          <input
            name={"checkbox_" + index}
            id={"checkbox_" + answer.id}
            type="checkbox"
            className="answer-checkbox"
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
