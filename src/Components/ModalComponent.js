import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ModalComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.handleClose();
  }

  render() {
    const { count, show } = this.props;
    return (
      <Modal show={show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Modal is clicked ${count} number of times `}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalComponent;
