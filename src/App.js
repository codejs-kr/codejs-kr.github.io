import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Toy, About, Development, DevelopmentDetails, NotFound } from 'pages';
import 'statics/scss/main.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  bindScrollEvent = () => {
    const body = document.querySelector('body');

    window.onscroll = () => {
      body.classList[window.scrollY > 160 ? 'add': 'remove']('scrolled');
    };
  };

  init = () => {
    this.bindScrollEvent();
  };

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Development} />
          <Route exact path="/toy" component={Toy} />
          <Route exact path="/development" component={Development} />
          <Route path="/development/:name" component={DevelopmentDetails} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;

