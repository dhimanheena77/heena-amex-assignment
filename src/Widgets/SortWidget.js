import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Select from "react-select";

import { options, unOrderedList } from "./Constants";

class SortWidget extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      list: unOrderedList
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.listToRender = unOrderedList;
  }

  handleChange(e) {
    const type = e.value;
    const newList = this.listToRender.filter(el => el.type === type);
    this.setState({
      list: newList
    });
  }

  handleSort() {
    let currentist = this.state.list;
    currentist.sort(function(a, b) {
      var textA = a.label.toUpperCase();
      var textB = b.label.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    this.setState({
      list: currentist
    });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="row">
        <div className="col-md-4">
          <Select options={options} onChange={this.handleChange} />
          {list && list.map(el => <li>{el.label}</li>)}
        </div>
        <div className="col-md-2">
          <Button variant="primary" onClick={this.handleSort}>
            Sort
          </Button>
        </div>
      </div>
    );
  }
}

export default SortWidget;
