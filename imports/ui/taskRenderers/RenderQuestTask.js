import React, { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

import { StaticMulti, StaticSurvey, StaticTraining } from "@xyng/yuoshi-backend-adapter";
import { Button, Card, Checkbox, Form, TextArea } from "semantic-ui-react";
import PromisifiedMeteor from "../../api/promisified";
import Swal from "sweetalert2";
import RenderQuest from "./RenderQuest";

const propTypes = {
  task: PropTypes.oneOfType([PropTypes.instanceOf(StaticMulti), PropTypes.instanceOf(StaticSurvey)])
    .isRequired
};

/**
 * @typedef RenderQuestTaskProps
 * @property {StaticMulti|StaticSurvey} task
 */

/**
 * Render a QuestTask
 *
 * @param {RenderQuestTaskProps} props
 * @returns {*}
 * @constructor
 */
const RenderQuestTask = (props) => {
  // destructure here and not in function-params so we get type-hints
  const { task } = props;

  const [currentQuestId, setCurrentQuestId] = useState("");
  const [doneQuests, setDoneQuests] = useState([]);

  const onGetNextQuest = useCallback(async ({ current_quest, done_quests }) => {
    setCurrentQuestId(current_quest);
    setDoneQuests(done_quests);
  }, []);

  const question = useMemo(() => {
    if (!task) {
      return;
    }

    return task.contents.find((quest) => quest.id === currentQuestId);
  }, [task, currentQuestId]);

  const isLastQuestion = useMemo(() => {
    if (!task) {
      return false;
    }

    return task.contents.length - doneQuests.length <= 1;
  }, [task, question, doneQuests]);

  return (
    <>
      <RenderQuest
        task={task}
        question={question}
        isLastQuestion={isLastQuestion}
        onGetNextQuest={onGetNextQuest}
      />
    </>
  );
};
RenderQuestTask.propTypes = propTypes;

export default RenderQuestTask;
