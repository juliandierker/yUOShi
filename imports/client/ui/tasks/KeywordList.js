import React from "react";

import { Segment, List, Button, Icon } from "semantic-ui-react";

export default class KeywordList extends React.Component {
  //PROPS: finished, keywords, finisehdKeywords, solutionPrepare()

  renderListElem() {
    return this.props.keywords.map((keyword, index) => {
      return (
        <List.Item style={{ fontSize: "12px" }} key={keyword + index} as="a">
          {this.props.finisehdKeywords.includes(keyword) ? (
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

  render() {
    const buttonDisabled = this.props.finished ? false : true;
    const buttonColor = this.props.finished ? "green" : "grey";

    return (
      <Segment style={{ position: "fixed", margin: "20% 0 0 5%" }}>
        <List>{this.renderListElem()}</List>
        <Button
          color={buttonColor}
          disabled={buttonDisabled}
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            marginRight: "18.4%",
            maxWidth: "230px"
          }}
          floated="right"
          onClick={() => this.props.solutionPrepare()}
        >
          Weiter
        </Button>
      </Segment>
    );
  }
}
