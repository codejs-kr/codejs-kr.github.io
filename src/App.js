import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Development, DevelopmentDetails, NotFound } from 'pages';
import 'statics/scss/main.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Development} />
            <Route exact path="/development" component={Development} />
            <Route path="/development/:name" component={DevelopmentDetails} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

