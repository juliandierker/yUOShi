import React, { useCallback, useEffect, useState, useMemo } from "react";
import PromisifiedMeteor from "../../api/promisified";
import Swal from "sweetalert2";

import { useTasksContext } from "../student/TasksContext";
import "./RenderMulti.css";

/** @type React.FC */
const RenderQuest = ({ task }) => {
  const question = task.contents[0];
  const { getSolution, setSolution } = useTasksContext();

  const [done, setDone] = useState(false);
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
    if (done) return;
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
    if (result.is_correct) {
      Swal.fire({
        position: "top-end",
        type: "success",
        title: "Geschafft!",
        timer: 2000
      }).then();
    } else {
      const { value: showSolution } = await Swal.fire({
        position: "top-end",
        type: "warning",
        title: "Nicht ganz...",
        text:
          "Es sind nicht alle Fragen richtig beantwortet. Willst du es nochmal versuchen, oder möchtest du dir die Lösung anschauen?",
        confirmButtonText: "Lösung zeigen",
        cancelButtonText: "Nochmal versuchen",
        cancelButtonColor: "#3085d6",
        showCancelButton: true
      });
      // TODO: Lösung zeigen funktioniert noch nicht
      if (showSolution) {
        // await Promise.all(
        //   result.quest_solutions.map(({ id }) => {
        //     return PromisifiedMeteor.call("tasks.getSolution", id);
        //   })
        // )
      }
    }
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
