import React, { Component } from 'react';
import { PageTemplate, DevelopmentTemplate } from 'components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DevelopmentItemContainer } from "containers";

class Development extends Component {
  render() {
    return (
      <PageTemplate>
        <DevelopmentTemplate>
          <DevelopmentItemContainer />
        </DevelopmentTemplate>
      </PageTemplate>
    );
  }
}

export default Development;