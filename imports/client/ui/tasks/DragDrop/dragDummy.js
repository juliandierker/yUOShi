import React, { Component } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

import { Grid, Card, Icon, Image, Button } from "semantic-ui-react";
const SortableImage = SortableElement(({ value }) => (
  <Image
    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
    wrapped
    ui={false}
  />
));
const SortableDescription = SortableElement(({ value }) => (
  <Card.Description>
    Matthew is a musician living in Nashville.
  </Card.Description>
));
const SortableExample = SortableElement(({ value }) => (
  <a>
    <Icon name="user" />
    22 Friends
  </a>
));
const cards = [
  <Card key="c1">
    <SortableImage key={"1"} index={"index"} value={"value"} />
    <Card.Content>
      <Card.Header>Motivation</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <SortableDescription key={"2"} index={"index2"} value={"value2"} />
    </Card.Content>
    <Card.Content extra>
      <SortableExample key={"3"} index={"index3"} value={"value3"} />
    </Card.Content>
  </Card>,
  <Card key="c2">
    <SortableImage key={"4"} index={"index4"} value={"value4"} />
    <Card.Content>
      <Card.Header>Testy</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <SortableDescription key={"5"} index={"index5"} value={"value5"} />
    </Card.Content>
    <Card.Content extra>
      <SortableExample key={"6"} index={"index6"} value={"value6"} />
    </Card.Content>
  </Card>
];

const SortableCards = SortableContainer(({ cards }) => {
  return cards.map((card, index) => {
    return <Grid.Column> {card} </Grid.Column>;
  });
});

export default class DragdropViewFormular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards
    };
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    console.log(oldIndex, newIndex);
    this.setState(({ cards }) => ({
      cards: arrayMove(cards, oldIndex, newIndex)
    }));
  };
  render() {
    const { cards } = this.state;
    return this.generateGrid(cards);
  }
  generateGrid(cards) {
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <SortableCards cards={this.state.cards} onSortEnd={this.onSortEnd} />
        </Grid.Row>
      </Grid>
    );
  }
  renderSortableContent() {
    return (
      <SortableCards cards={this.state.cards} onSortEnd={this.onSortEnd} />
    );
  }
  generateCards(cards) {
    return (
      <SortableCards cards={this.state.cards} onSortEnd={this.onSortEnd} />
    );
  }
}
