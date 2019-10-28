import React, { Component } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag, generateItems } from "./utils";
import { Grid, Image, Form } from "semantic-ui-react";

const groupStyle = {
  marginLeft: "50px",
  flex: 1
};

export default class DragdropViewFormular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items1: generateItems(4, i => ({
        id: "1" + i,
        data: `Draggable 1 - ${i}`
      })),
      items2: generateItems(4, i => ({
        id: "2" + i,
        data: `Draggable 2 - ${i}`
      }))
    };
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "stretch",
          marginTop: "50px",
          marginRight: "50px"
        }}
      >
        <div style={groupStyle}>
          <Container
            groupName="1"
            getChildPayload={i => this.state.items1[i]}
            onDrop={e =>
              this.setState({ items1: applyDrag(this.state.items1, e) })
            }
          >
            {this.state.items1.map(p => {
              return (
                <Draggable key={p.id}>
                  <div className="draggable-item">
                    <Image src="/avatars/Lehrer.png" />
                  </div>
                </Draggable>
              );
            })}
          </Container>
        </div>
        <div style={groupStyle}>
          <Container
            groupName="1"
            getChildPayload={i => this.state.items2[i]}
            onDrop={e =>
              this.setState({ items2: applyDrag(this.state.items2, e) })
            }
          >
            {this.state.items2.map(p => {
              return (
                <Draggable key={p.id}>
                  <div className="draggable-item">{p.data}</div>
                </Draggable>
              );
            })}
          </Container>
        </div>
      </div>
    );
  }
}
