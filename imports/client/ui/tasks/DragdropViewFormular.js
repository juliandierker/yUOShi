import React, { Component } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag, generateItems } from "./utils";

const form = [
  {
    id: 0,
    element: <h2>Form Header</h2>
  },
  {
    id: 1,
    label: "Full Name",
    element: (
      <div className="field-group">
        <input type="text" />
        <input type="text" />
      </div>
    )
  },
  {
    id: 2,
    label: "Email",
    element: <input type="email" />
  },
  {
    id: 3,
    label: "Address",
    element: <textarea name="address" id="" cols="30" rows="10" />
  },
  {
    id: 5,
    label: "Radio",
    element: (
      <div>
        <div>
          <label>
            <input type="radio" name="r" /> option 1
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="r" /> option 2
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="r" /> option 3
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="r" /> option 4
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="r" /> option 5
          </label>
        </div>
      </div>
    )
  },
  {
    id: 4,
    label: "Options",
    element: (
      <select>
        <option value="1">Option 1</option>
        <option value="2" selected>
          Option 2
        </option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </select>
    )
  },
  {
    id: 6,
    label: "Checkbox",
    element: (
      <div>
        <div>
          <label>
            <input type="checkbox" name="r" /> option 1
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="r" /> option 2
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="r" /> option 3
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="r" /> option 4
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="r" /> option 5
          </label>
        </div>
      </div>
    )
  },
  {
    id: 7,
    element: (
      <div>
        <button className="form-submit-button">Submit</button>
      </div>
    )
  }
];

export default class DragdropViewFormular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form
    };
  }
  onDrop(dropResult) {
    console.log(dropResult);
    console.log(this);
    console.log(this.state.form);
    return this.setState({ form: applyDrag(this.state.form, dropResult) });
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

  generateForm(form) {
    return form.map(item => {
      return (
        <Draggable key={item.id}>
          <div className={`form-line`}>
            <div className="label">
              <span>{item.label}</span>
            </div>
            <div className="field">{item.element}</div>
          </div>
        </Draggable>
      );
    });
  }

  render() {
    console.log("formular");
    const that = this.props.that;
    return (
      <div className="form-demo">
        <div className="form">
          <Container
            style={{ paddingBottom: "200px" }}
            dragClass="form-ghost"
            dropClass="form-ghost-drop"
            onDrop={this.onDrop.bind(this)}
            nonDragAreaSelector=".field"
          >
            {this.generateForm(this.state.form)}
          </Container>
        </div>
      </div>
    );
  }
}
