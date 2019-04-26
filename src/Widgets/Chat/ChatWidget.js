import React, { Component } from "react";

import "./Chat.css";

class ChatWidget extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userMessages: [],
      currentUserMessage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      currentUserMessage: e.target.value
    });
  }

  handleClick() {
    const { userMessages, currentUserMessage } = this.state;
    const newUserMessages = [...userMessages, currentUserMessage];
    this.setState({
      userMessages: newUserMessages
    });
  }

  render() {
    const { userMessages } = this.state;
    return (
      <div>
        {userMessages &&
          userMessages.map(el => {
            return (
              <div>
                <div className="container">
                  <i className="fa fa-user" />
                  <p>{el}</p>
                  <span className="time-right">11:00</span>
                </div>

                <div className="container darker">
                  <i className="fa fa-user" />
                  <p>Hi There !</p>
                  <span className="time-left">11:01</span>
                </div>
              </div>
            );
          })}

        <span>
          <input
            style={{ width: "100%" }}
            type="text"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Submit</button>
        </span>
      </div>
    );
  }
}

export default ChatWidget;
