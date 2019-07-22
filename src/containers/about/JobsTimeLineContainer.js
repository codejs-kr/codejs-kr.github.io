import React, { Component } from 'react';
import { TimeLine } from "components";
import data from "./data/jobs";

class JobsTimeLineContainer extends Component {
  render() {
    return (
      <TimeLine data={data} />
    );
  }
}

export default JobsTimeLineContainer;
