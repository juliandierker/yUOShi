import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import reactStringReplace from "react-string-replace";
import ReactPlayer from "react-player";

import {
  Button,
  Header,
  Image,
  Grid,
  Segment,
  Label,
  Modal
} from "semantic-ui-react";

export default class TagView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      tags: [],
      videoOpen: true
    };
    this.view = null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activeTask._id != this.props.activeTask._id) {
      if (this.state.tags.length > 0) {
        const tags = [];
        this.setState({ tags });
      }
    }
  }

  renderImage(match) {
    return <Image src={"/tasks" + match} size="small" floated="left" />;
  }
  handleClickTag(match, key) {
    var el = document.getElementsByClassName(match);
    var highlighted = document.getElementById(match + key);

    var tags = this.state.tags;
    tags.push(match);
    this.props.externUpdate(tags);
    for (var i = 0; i < el.length; i++) {
      ReactDOM.unmountComponentAtNode(el[i]);
      if (el[i] === highlighted) {
        ReactDOM.render(
          <Label key={match + i} id={match}>
            {match}
          </Label>,
          el[i]
        );
      } else {
        ReactDOM.unmountComponentAtNode(el[i]);

        ReactDOM.render(
          <strong id={match} style={{ color: "#585858" }} key={match + i}>
            {match}
          </strong>,
          el[i]
        );
      }
    }
  }
  renderText() {
    var plainText = this.props.activeTask.content[0].text;
    var keyArr = this.props.activeTask.content[0].keywords;
    let tmpKey = 0;

    //adding images
    const images = this.props.activeTask.content[0].images;
    const entries = Object.entries(images);
    const imgKeys = Object.keys(images);

    //preparing text for tags
    var count = 0;
    for (var i in keyArr) {
      const replacerStr = keyArr[i];
      var re = new RegExp("(?:" + replacerStr + ")(\\W)", "g");
      var plainText = reactStringReplace(plainText, re, (match, j) => {
        tmpKey++;
        const k = tmpKey;
        return (
          <React.Fragment key={"textFragment" + tmpKey}>
            {imgKeys && replacerStr == imgKeys[1] && count == 0
              ? (count++,
                (
                  <Image
                    src={"/tasks/" + entries[1][1]}
                    style={{ width: "100%", marginTop: "3%" }}
                    floated="left"
                  />
                ))
              : null}
            <span
              key={"textSpan" + tmpKey}
              className={replacerStr}
              id={replacerStr + k}
              style={{ lineHeight: "2" }}
              onClick={() => this.handleClickTag(replacerStr, k)}
            >
              {replacerStr}
            </span>
            {match}
          </React.Fragment>
        );
      });
    }
    var middle = Math.floor(plainText.length / 2);
    var partOne = plainText.slice(0, middle + 1);
    var partTwo = plainText.slice(middle + 1, plainText.length);
    return (
      <Segment id="defTextReader">
        <Header as="h1"> {this.props.activeTask.title}</Header>

        <Image
          style={{ width: "100%", marginBottom: "5%" }}
          src={"/tasks/" + entries[0][1]}
          size="medium"
          centered
        />
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column> {partOne}</Grid.Column>
            <Grid.Column>{partTwo} </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }

  renderVideo() {
    if (this.props.activeTask.video) {
      return (
        <Modal
          basic
          size="tiny"
          open={this.state.videoOpen}
          onClose={() => this.setState({ videoOpen: false })}
          trigger={
            <Button
              onClick={() => this.setState({ videoOpen: true })}
              style={{ backgroundColor: "#8fb0e8", color: "white" }}
              content="Video ansehen"
              icon="play"
              labelPosition="right"
            />
          }
        >
          <Modal.Content>
            <ReactPlayer
              style={{ margin: "auto" }}
              url={this.props.activeTask.video}
              playing
              controls={true}
            />

            <Button
              style={{ marginLeft: "70%", marginTop: "10px" }}
              color="orange"
              onClick={() => this.setState({ videoOpen: false })}
              inverted
            >
              Später ansehen
            </Button>
          </Modal.Content>
        </Modal>
      );
    }
  }
  render() {
    return (
      <div>
        {this.renderText()}
        {this.renderVideo()}
      </div>
    );
  }
}
