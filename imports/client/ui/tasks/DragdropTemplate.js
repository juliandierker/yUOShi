import React, { Component } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag, generateItems } from "./utils";
import DragdropViewNormal from "./DragdropViewNormal";
import DragdropViewNested from "./DragdropViewNested";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const cardColors = ["white"];
const pickColor = () => {
  let rand = Math.floor(Math.random() * 10);
  return cardColors[rand];
};

export default class DragdropTemplate extends Component {
  constructor(props) {
    super(props);
    this.view = React.createRef();

    this.onColumnDrop = this.onColumnDrop.bind(this);
    this.onCardDrop = this.onCardDrop.bind(this);
    this.getCardPayload = this.getCardPayload.bind(this);
    const catLength = props.activeTask.categories.length;
    this.state = {
      scene: {
        type: "container",
        props: {
          orientation: props.activeTask.orientation[0],
          id: "dragdropContainer"
        },
        children: generateItems(catLength, i => ({
          id: `column${i}`,
          solution: props.activeTask.solArray[i],
          type: "container",
          name: props.activeTask.categories[i],
          props: {
            id: `column${i}`,
            orientation: props.activeTask.orientation[1],
            className: "card-container"
          },
          children: generateItems(
            props.activeTask.statements.length / catLength,
            j => ({
              type: "draggable",
              id: `${i}${j}`,
              props: {
                className: "card",
                id: `${i}${j}`,
                style: { backgroundColor: pickColor() }
              },
              solution: props.activeTask.statements[j][0],
              data: props.activeTask.statements[j][1]
            }),
            i
          )
        }))
      }
    };
  }
  componentDidUpdate() {
    if (this.props.showSolution) this.renderSolutionState();
  }
  componentDidMount() {
    if (this.props.activeTask.orientation === "horizontal") {
      let elems = [
        ...document.getElementsByClassName("smooth-dnd-draggable-wrapper")
      ];
      elems.map(elem => {
        if (elem.style.display === "table-cell") {
          elem.style.display = "auto";
        }
      });
    }
  }
  renderSolutionState() {
    this.view.current.renderSolutionState();
  }
  render() {
    return this.props.activeTask.nested && this.state.scene ? (
      <DragdropViewNested
        scene={this.state.scene}
        model={this.props.model}
        that={this}
        ref={this.view}
      />
    ) : (
      <DragdropViewNormal
        model={this.props.model}
        scene={this.state.scene}
        that={this}
        ref={this.view}
      />
    );
  }

  getCardPayload(columnId, index) {
    return this.state.scene.children.filter(p => p.id === columnId)[0].children[
      index
    ];
  }

  onColumnDrop(dropResult) {
    const scene = Object.assign({}, this.state.scene);
    scene.children = applyDrag(scene.children, dropResult);
    this.setState({
      scene
    });
  }

  onCardDrop(columnId, dropResult) {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const scene = Object.assign({}, this.state.scene);
      const column = scene.children.filter(p => p.id === columnId)[0];
      const columnIndex = scene.children.indexOf(column);

      const newColumn = Object.assign({}, column);
      newColumn.children = applyDrag(newColumn.children, dropResult);
      scene.children.splice(columnIndex, 1, newColumn);

      this.setState({
        scene
      });
    }
  }
}
