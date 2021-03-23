import React, { useCallback, useMemo, useState } from "react";
import RenderQuest from "./RenderQuest";
import { Button } from "semantic-ui-react";

const RenderTraining = ({ task, updateTask }) => {
  console.log(task);
  const [currentQuestId, setCurrentQuestId] = useState("");
  const [currentContentId, setCurrentContentId] = useState("");
  const [doneQuests, setDoneQuests] = useState([]);
  const [doneContents, setDoneContents] = useState([]);
  const [outroContent, setOutroContent] = useState();
  const [introContent, setIntroContent] = useState();

  const onGetNextQuest = useCallback(
    async ({ current_quest, current_content, done_quests, done_contents }) => {
      if (currentContentId !== current_content) {
        // show outro of old content and intro of new content (if any)
        setOutroContent(currentContentId);
        setIntroContent(current_content);
      }

      if (!currentContentId) {
        setIntroContent(current_content);
      }

      setCurrentQuestId(current_quest);
      setCurrentContentId(current_content);
      setDoneQuests(done_quests);
      setDoneContents(done_contents);
    },
    [currentContentId]
  );

  const prevContent = useMemo(() => {
    if (!task || !outroContent) {
      return;
    }

    return task.contents.find((content) => content.id === outroContent);
  }, [task, outroContent]);

  const content = useMemo(() => {
    if (!task || task.contents.length <= doneContents.length) {
      return;
    }

    return task.contents.find((content) => content.id === currentContentId);
  }, [task, currentContentId, doneContents]);

  const question = useMemo(() => {
    if (!task) {
      return;
    }

    if (!content) {
      return;
    }

    return content.quests.find((quest) => quest.id === currentQuestId);
  }, [task, content, currentQuestId]);

  const isLastQuestion = useMemo(() => {
    if (!task) {
      return false;
    }

    if (task.contents.length > doneContents.length) {
      return false;
    }

    const unDoneQuestsInContent = content.quests.filter((quest) => !doneQuests.includes(quest.id));
    if (unDoneQuestsInContent.length > 1) {
      return false;
    }

    return true;
  }, [content, task, doneContents, doneQuests]);

  const closeOutro = useCallback(() => {
    setOutroContent(undefined);

    if (!content) {
      updateTask();
    }
  }, [content, updateTask]);

  const closeIntro = useCallback(() => {
    setIntroContent(undefined);
  }, []);

  if (prevContent) {
    return (
      <>
        <span>{prevContent.outro}</span>
        <Button onClick={closeOutro}>
          {content && <>Zum nächsten Inhalt</>}
          {!content && <>Training abschließen</>}
        </Button>
      </>
    );
  }

  if (introContent && content) {
    return (
      <>
        <span>{content.intro}</span>
        <Button onClick={closeIntro}>Zu den Fragen</Button>
      </>
    );
  }

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

export default RenderTraining;
