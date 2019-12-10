import React, { Component } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag, generateItems } from "../utils";

export default class DragdropViewNested extends Component {
  constructor(props) {
    super(props);
  }
  renderSolutionState() {
    const that = this.props.that;
    const solutions = this.props.scene.children;

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
    const that = this.props.that;

    return (
      <div className="card-scene">
        <Container
          orientation={this.props.scene.props.orientation}
          onDrop={that.onColumnDrop}
          dragHandleSelector=".column-drag-handle"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "cards-drop-preview"
          }}
        >
          {this.props.scene.children.map(column => {
            return (
              <Draggable key={column.id}>
                <div className={column.props.className}>
                  <div className="card-column-header">{column.name}</div>
                  <Container
                    {...column.props}
                    groupName="col"
                    onDragStart={e => {}}
                    onDrop={e => that.onCardDrop(column.id, e)}
                    getChildPayload={index =>
                      that.getCardPayload(column.id, index)
                    }
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    onDragEnter={() => {}}
                    onDragLeave={() => {}}
                    onDropReady={p => {}}
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
}
