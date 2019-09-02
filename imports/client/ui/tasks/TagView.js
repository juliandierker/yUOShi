import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import reactStringReplace from "react-string-replace";
import ReactPlayer from "react-player";

import {
  Button,
  Header,
  List,
  Image,
  Grid,
  Icon,
  Segment,
  Label,
  Modal
} from "semantic-ui-react";
import Swal from "sweetalert2";

export default class TagView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      tags: [],
      finished: false,
      videoOpen: true
    };
    this.view = null;
  }

  componentDidUpdate(prevProps, prevState) {
    var sol = this.props.activeTask.content[0].keywords;
    if (prevProps.activeTask._id != this.props.activeTask._id) {
      if (this.state.tags.length > 0) {
        const tags = [];
        this.setState({ tags });
      }
    }

    if (sol.length == this.state.tags.length) {
      if (!this.state.finished) {
        this.setState({ finished: true });
      }
    }
  }

  renderListElem() {
    return this.props.activeTask.content[0].keywords.map((keyword, index) => {
      return (
        <List.Item style={{ fontSize: "12px" }} key={keyword + index} as="a">
          {this.state.tags.includes(keyword) ? (
            <Icon key={"icon" + index} color="green" name="check" />
          ) : (
            <Icon key={"icon" + index} name="help" />
          )}

          <List.Content key={"content" + index}>
            <List.Header key={"header" + index}>{keyword}</List.Header>
          </List.Content>
        </List.Item>
      );
    });
  }
  renderImage(match) {
    return <Image src={"/tasks" + match} size="small" floated="left" />;
  }
  handleClickTag(match, key) {
    var el = document.getElementsByClassName(match);
    var highlighted = document.getElementById(match + key);

    if (!this.state.tags.includes(match)) {
      var tags = this.state.tags;
      tags.push(match);
      this.setState({ tags });
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
      <Segment
        id="defTextReader"
        style={{ maxWidth: "100%", whiteSpace: "pre-line" }}
      >
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

  renderTaglist() {
    const buttonDisabled = this.state.finished ? false : true;
    const buttonColor = this.state.finished ? "green" : "grey";
    return (
      <Segment style={{ position: "fixed", margin: "20% 0 0 9%" }}>
        <List>{this.renderListElem()}</List>
        <Button
          color={buttonColor}
          disabled={buttonDisabled}
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            marginRight: "18.4%"
          }}
          floated="right"
          onClick={() => this.solutionPrepare()}
        >
          Weiter
        </Button>
      </Segment>
    );
  }
  getTaskImage() {}
  renderView() {
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column id="column_left">
            <Grid.Row>{this.getTaskImage()}</Grid.Row>
            {this.renderTaglist()}
          </Grid.Column>
          <Grid.Column>{this.renderText()}</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  solutionPrepare() {
    var sol = this.props.model.run(this.state.tags);
    if (
      (sol && sol[0].includes("won")) ||
      this.props.activeTask.content[0].keywords.length === 0
    ) {
      var meteorMethod =
        "solutionHandler.submit" + this.props.activeTask.filePrefix;
      Meteor.call(
        meteorMethod,
        this.state.tags,
        this.props.student._id,
        this.props.activeTask,
        (err, res) => {
          if (res) {
            Swal.fire({
              position: "top-end",
              type: "success",
              title: "Geschafft",
              timer: 1500
            });
          }
        }
      );
    } else {
      Swal.fire({
        position: "top-end",
        type: "warning",
        title: "Die Lösung ist noch nicht korrekt.",
        timer: 1500
      });
    }
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
            <Button onClick={() => this.setState({ videoOpen: true })}>
              Video ansehen
            </Button>
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
        {this.renderView()}
        {this.renderVideo()}
      </div>
    );
  }
}
