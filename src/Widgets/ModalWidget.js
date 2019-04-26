import React, { Component } from "react";
import { Button } from "react-bootstrap";

import ModalComponent from "./../Components/ModalComponent";

class ModalWidget extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      count: 0,
      modalShow: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleShow() {
    const { modalShow, count } = this.state;
    const newCount = count + 1;
    this.setState({
      modalShow: !modalShow,
      count: newCount
    });
  }

  handleClose() {
    const { modalShow } = this.state;
    this.setState({
      modalShow: !modalShow
    });
  }

  handleReset(){
    this.setState({
      count: 0
    })
  }

  render() {
    const { count, modalShow } = this.state;
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Open
        </Button>
        <Button variant="primary" onClick={this.handleReset}>
          Reset
        </Button>

        <ModalComponent
          show={modalShow}
          count={count}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default ModalWidget;
