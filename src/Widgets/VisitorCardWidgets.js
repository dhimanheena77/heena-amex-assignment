import React, { Component } from "react";

class VistorCardsWidget extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentName: "",
      namesList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.enterPressed = this.enterPressed.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.setState({ currentName: name });
  }

  handleAdd() {
    const { namesList, currentName } = this.state;
    const newList = [...namesList, currentName];
    this.setState({
      namesList: newList
    });
  }

  enterPressed(event) {
    const code = event.keyCode || event.which;
    if (code === 13) {
      this.handleAdd();
    }
  }

  handleRemove() {
    const { namesList } = this.state;
    const lastElement = namesList[namesList.length - 1];
    const newList = namesList.filter(el => el !== lastElement);
    this.setState({
      namesList: newList
    });
  }

  render() {
    const { namesList, currentName } = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          onKeyPress={this.enterPressed.bind(this)}
        />
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleRemove}>-</button>
        <p>{currentName}</p>
        {namesList && namesList.map(el => <p>{`Hello ${el}`}</p>)}
      </div>
    );
  }
}

export default VistorCardsWidget;
