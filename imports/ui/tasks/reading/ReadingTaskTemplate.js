import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";

import FullEditor from "../texteditor/FullEditor";
import {
  Image,
  Dropdown,
  Icon,
  Grid,
  Header,
  Segment,
  Button,
  Responsive
} from "semantic-ui-react";

export default function ReadingTaskTemplate() {
  const taskText =
    "<p> Lorem Ipsum backgroundColorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum Dolor</p>";

  const [textContent, setTextContent] = useState(taskText);
  const [showEditor, setShowEditor] = useState(false);

  handleEditor = (event, editor) => {
    const content = editor.getData();

    setTextContent(content);
  };
  var el = document.createElement("div");

  el.innerHTML = textContent;

  return (
    <div id="workspace_div">
      <Icon name="pencil alternate" onClick={() => setShowEditor(!showEditor)} />
      <Segment id="defTextReader">
        <Header as="h1"> Testlesetask</Header>

        <Image
          style={{ marginBottom: "5%" }}
          src="/tasks/Tag/Motivation0/Ziel.jpg"
          size="small"
          centered
        />
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            {showEditor ? (
              <FullEditor
                onChange={handleEditor.bind(this)}
                name="example"
                value={"Lorem Ipsum Dolor Lorem Ipsum Dolor"}
              />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: textContent }} />
            )}
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}
