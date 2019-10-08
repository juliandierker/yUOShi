import React, { Component } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag, generateItems } from "./utils";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const cardColors = [
  "azure",
  "beige",
  "bisque",
  "blanchedalmond",
  "burlywood",
  "cornsilk",
  "gainsboro",
  "ghostwhite",
  "ivory",
  "khaki"
];
const pickColor = () => {
  let rand = Math.floor(Math.random() * 10);
  return cardColors[rand];
};

export default class DragdropTemplate extends Component {
  constructor(props) {
    super(props);

    this.onColumnDrop = this.onColumnDrop.bind(this);
    this.onCardDrop = this.onCardDrop.bind(this);
    this.getCardPayload = this.getCardPayload.bind(this);
    const catLength = props.activeTask.categories.length;
    this.state = {
      scene: {
        type: "container",
        props: {
          orientation: "horizontal",
          id: "dragdropContainer"
        },
        children: generateItems(catLength, i => ({
          id: `column${i}`,
          solution: props.activeTask.solArray[i],
          type: "container",
          name: props.activeTask.categories[i],
          props: {
            id: `column${i}`,
            orientation: props.activeTask.orientation,
            className: "card-container"
          },
          children: generateItems(
            props.activeTask.statements[0].length / catLength,
            j => ({
              type: "draggable",
              id: `${i}${j}`,
              props: {
                className: "card",
                id: `${i}${j}`,
                style: { backgroundColor: pickColor() }
              },
              solution: props.activeTask.statements[0][j][0],
              data: props.activeTask.statements[0][j][1]
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
      console.log(elems);
      elems.map(elem => {
        console.log(elem.style);
        if (elem.style.display === "table-cell") {
          elem.style.display = "auto";
        }
      });
    }
  }
  renderSolutionState() {
    const solutions = this.state.scene.children;

    solutions.map(solution => {
      solution.children.map(child => {
        let elem = document.getElementById(child.id);
        elem.style.backgroundColor = "green";
        if (
          this.props.model.visQueue.find(elem => {
            return elem.id === child.id;
          }) !== undefined
        ) {
          elem.style.backgroundColor = "red";
        }
      });
    });
  }
  render() {
    console.log("Drag render");
    return (
      <div className="card-scene">
        <Container
          orientation="horizontal"
          onDrop={this.onColumnDrop}
          dragHandleSelector=".column-drag-handle"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "cards-drop-preview"
          }}
        >
          {this.state.scene.children.map(column => {
            return (
              <Draggable key={column.id}>
                <div className={column.props.className}>
                  <div className="card-column-header">
                    <span className="column-drag-handle">&#x2630;</span>
                    {column.name}
                  </div>
                  <Container
                    {...column.props}
                    groupName="col"
                    onDragStart={e => console.log("drag started", e)}
                    onDragEnd={e => console.log("drag end", e)}
                    onDrop={e => this.onCardDrop(column.id, e)}
                    getChildPayload={index =>
                      this.getCardPayload(column.id, index)
                    }
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    onDragEnter={() => {
                      console.log("drag enter:", column.id);
                    }}
                    onDragLeave={() => {
                      console.log("drag leave:", column.id);
                    }}
                    onDropReady={p => console.log("Drop ready: ", p)}
                    dropPlaceholder={{
                      animationDuration: 150,
                      showOnTop: true,
                      className: "drop-preview"
                    }}
                    dropPlaceholderAnimationDuration={200}
                  >
                    {column.children.map(card => {
                      return (
                        <Draggable key={card.id}>
                          <div {...card.props}>
                            <p>{card.data}</p>
                          </div>
                        </Draggable>
                      );
                    })}
                  </Container>
                </div>
              </Draggable>
            );
          })}
        </Container>
      </div>
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
