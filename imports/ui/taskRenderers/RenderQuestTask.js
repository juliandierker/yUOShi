import React, { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

import { StaticMulti, StaticSurvey, StaticTraining } from "@xyng/yuoshi-backend-adapter";
import RenderQuest from "./RenderQuest";
import PromisifiedMeteor from "../../api/promisified";
import NoContent from "../ErrorPages/NoContent";

const propTypes = {
  task: PropTypes.oneOfType([PropTypes.instanceOf(StaticMulti), PropTypes.instanceOf(StaticSurvey)])
    .isRequired
};

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
      {task.contents.length ? (
        <RenderQuest
          task={task}
          question={question}
          isLastQuestion={isLastQuestion}
          onGetNextQuest={onGetNextQuest}
        />
      ) : (
        <NoContent />
      )}
    </>
  );
};
RenderQuestTask.propTypes = propTypes;

export default RenderQuestTask;
