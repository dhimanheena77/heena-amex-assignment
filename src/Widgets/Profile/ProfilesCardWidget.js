import React, { Component } from "react";
import { profileItems } from "./../Constants";

import "./Profiles.css";

class ProfilesCardWidget extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: profileItems
    };
  }

  handleOnClick(el) {
    const { items } = this.state;
    const elementToRemoveId = el.id;
    const newItemsList = items.filter(el => el.id !== elementToRemoveId);
    this.setState({
      items: newItemsList
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <div className="row">
          {items.map((el, index) => {
            return (
              <div className="column">
                <div key={index} className="card">
                  <right>
                    <span
                      style={{ float: "right" }}
                      onClick={() => this.handleOnClick(el)}
                    >
                      <i className="fa fa-minus" />
                    </span>
                  </right>
                  <center>
                    <i className="fa fa-user fa-2x circle-icon" />
                  </center>
                  <h3>{el.name}</h3>
                  <p>{el.profile}</p>
                  <p>{el.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProfilesCardWidget;
