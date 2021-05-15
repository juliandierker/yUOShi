import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Card, Checkbox, Form, TextArea } from "semantic-ui-react";
import PromisifiedMeteor from "../../api/promisified";
import Swal from "sweetalert2";
import { StaticSurvey } from "@xyng/yuoshi-backend-adapter";
import { useTasksContext } from "../student/TasksContext";

/** @type React.FC */
const RenderQuest = ({ task, question, isLastQuestion, onGetNextQuest }) => {
  const { getSolution, setSolution } = useTasksContext();
  const [solutions, setSolutions] = useState(undefined);
  const [selectedQuestionAnswers, setSelectedQuestionAnswers] = useState({});
  const [userSolutionId, setUserSolutionId] = useState();
  const [customAnswer, setCustomAnswer] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setSolution(() => onSubmit);
  }, [done]);

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
    setDone(!current_quest);
    onGetNextQuest(data);

    if (!current_quest) {
      return;
    }

    setUserSolutionId(id);
  }, [task, userSolutionId, onGetNextQuest]);

  useEffect(() => {
    getNextQuest();
  }, [getNextQuest]);

  const selectedAnswers = useMemo(() => {
    console.log(question);
    if (!question) {
      return [];
    }
    console.log(selectedQuestionAnswers);
    console.log(question.id);
    return selectedQuestionAnswers[question.id] || [];
  }, [question, selectedQuestionAnswers]);

  const onSubmitQuest = useCallback(async () => {
    if (!question) {
      return;
    }
    console.log(selectedAnswers);
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
    const result = await PromisifiedMeteor.call("tasks.checkQuest", question.id, givenAnswers);
    if (!result) {
      // TODO: handle error
      // the error may be caused by the user submitting more than 3 solution-attempts.
      // in that case we have to redirect to the next quest.

      // return true for now so that the user is redirected to next quest
      return true;
    }

    // surveys cannot have incorrect solutions
    if (result.is_correct || task instanceof StaticSurvey) {
      Swal.fire({
        position: "top-end",
        type: "success",
        title: "Geschafft!",
        timer: 2000
      }).then();
      return true;
    }

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

    if (showSolution) {
      setSolutions(await PromisifiedMeteor.call("tasks.getSolution", result.id));
      setDone(true);
    }

    return false;
  }, [selectedAnswers, question, customAnswer]);

  const onSubmit = useCallback(async () => {
    const result = await onSubmitQuest();

    if (!result) {
      // stay at current quest - user did not give correct answer
      // and may see the sample solution or submit another one
      return;
    }

    setDone(true);
  }, [onSubmitQuest, getNextQuest]);

  const toggleAnswer = useCallback(
    (question_id, answer_id) => () => {
      setSelectedQuestionAnswers((cur) => {
        let selected = cur[question_id] || [];

        if (!selected.includes(answer_id)) {
          selected = [...selected, answer_id];
        } else {
          selected = selected.filter((id) => id !== answer_id);
        }
        console.log("toggle");

        return {
          ...cur,
          [question_id]: selected
        };
      });
    },
    []
  );

  const onGetNextTask = useCallback(async () => {
    if (!done || !updateTask) {
      return;
    }
  }, [done]);

  /** @type React.ChangeEventHandler<HTMLInputElement> */
  const onChangeCustomAnswer = useCallback((event) => {
    setCustomAnswer(event.currentTarget.value);
  }, []);

  if (!question) {
    return null;
  }

  return (
    <>
      <Card.Group>
        <div key={"questionDiv_" + question.id} style={{ width: "100%", paddingBottom: "16px" }}>
          <Card key={"questionCard_" + question.id} style={{ width: "100%" }}>
            <Card.Content>
              <Card.Header style={{ marginBottom: "2rem", textAlign: "left" }}>
                <br />

                {question.question}
              </Card.Header>
              <Card.Description>
                {question.answers.map((answer) => {
                  let color = undefined;
                  if (solutions) {
                    const solutionAnswer = solutions.answers.find((cA) => cA.id === answer.id);
                    color = solutionAnswer && solutionAnswer.is_correct ? "green" : "red";
                  }

                  return (
                    <Checkbox
                      style={{
                        backgroundColor: color
                      }}
                      key={`answer_${answer.id}`}
                      radio={!question.multiple}
                      label={answer.content}
                      value={answer.id}
                      checked={selectedAnswers.includes(answer.id)}
                      onChange={toggleAnswer(question.id, answer.id)}
                      // todo disabled
                    />
                  );
                })}
                {question.custom_answer && (
                  <Form onSubmit={(event) => event.preventDefault()}>
                    <TextArea
                      placeholder="Eigene Antwort:"
                      value={customAnswer}
                      onChange={onChangeCustomAnswer}
                      // todo disabled
                    />
                  </Form>
                )}
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </Card.Group>
      {done && !isLastQuestion && (
        <Button id="solveTask" floated="right" onClick={getNextQuest}>
          Nächste Frage
        </Button>
      )}
      {done && isLastQuestion && (
        <Button id="solveTask" floated="right" onClick={onGetNextTask}>
          Nächste Aufgabe
        </Button>
      )}
      {/* {!done && (
        <Button id="solveTask" floated="right" onClick={onSubmit}>
          Aufgabe lösen
        </Button>
      )} */}
    </>
  );
};

export default RenderQuest;
