import React from "react";

import {
  Segment,
  List,
  Button,
  Icon,
  Grid,
  Responsive
} from "semantic-ui-react";

import Hyphenated from "react-hyphen";
import de from "hyphenated-de";

export default class KeywordList extends React.Component {
  //PROPS: finished, keywords, finishedKeywords, solutionPrepare()
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false
    };
  }
  decideMobile() {
    if (!this.state.isMobile) {
      this.setState({ isMobile: true });
    }
  }
  decideDesktop() {
    if (this.state.isMobile) {
      this.setState({ isMobile: false });
    }
  }
  renderColumns(row) {
    return row.map((keyword, index) => {
      if (keyword === null) return "";
      return (
        <div
          className="keyword-grid-row"
          id="keywordGridColumn"
          width={4}
          style={{
            padding: "0rem"
          }}
        >
          {this.props.finishedKeywords.includes(keyword) ? (
            <Icon key={"icon" + index} color="green" name="check" />
          ) : (
              <Icon key={"icon" + index} name="help" />
            )}
          {keyword}
        </div>
      );
    });
  }

  renderRows() {
    let rows = [];
    for (let i = 0; i < this.props.keywords.length; i += 3) {
      let rowArr = [];
      rowArr.push(this.props.keywords[i] ? this.props.keywords[i] : null);
      rowArr.push(
        this.props.keywords[i + 1] ? this.props.keywords[i + 1] : null
      );
      rowArr.push(
        this.props.keywords[i + 2] ? this.props.keywords[i + 2] : null
      );
      rows.push(rowArr);
    }
    let retval = rows.map(row => {
      return <div className="keyword-grid-col">{this.renderColumns(row)}</div>;
    });

    return retval.length === 1 ? retval[0] : retval;
  }

  renderListElems() {
    return this.props.keywords.map((keyword, index) => {
      return (
        <List.Item style={{ fontSize: "12px" }} key={keyword + index} as="a">
          {this.props.finishedKeywords.includes(keyword) ? (
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
  renderGrid() {
    return (
      <React.Fragment>
        <Responsive {...Responsive.onlyMobile}>
          <div className="keyword-grid">{this.renderRows()}</div>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <List>{this.renderListElems()}</List>
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <List>{this.renderListElems()}</List>
        </Responsive>
      </React.Fragment>
    );
  }
  render() {
    const finished =
      this.props.keywords.length === this.props.finishedKeywords.length;
    const buttonDisabled = finished ? false : true;
    const buttonColor = finished ? "green" : "grey";

    return (
      <Hyphenated language={de}>
        <Segment id="KeywordList">
          {this.renderGrid()}
          <Button
            id="KeywordListBtn"
            color={buttonColor}
            disabled={buttonDisabled}
            floated="right"
            onClick={() => this.props.handleClick()}
          >
            Aufgabe lösen
          </Button>
        </Segment>
      </Hyphenated>
    );
  }
}
