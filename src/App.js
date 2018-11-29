import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Development, NotFound } from 'pages';
import 'statics/scss/main.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Development} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

