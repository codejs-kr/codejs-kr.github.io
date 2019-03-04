import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Toy, About, Development, DevelopmentDetails, NotFound } from 'pages';
import 'statics/scss/main.scss';
import config from 'lib/config';

class App extends Component {
  constructor(props) {
    super(props);

    this.body = document.querySelector('body');
    this.init();
  }

  bindScrollEvent = () => {
    window.onscroll = () => {
      this.body.classList[window.scrollY > 160 ? 'add': 'remove']('scrolled');
    };
  };

  checkEnv = () => {
    this.body.classList.add(config.isMobile ? 'mobile' : 'pc');

    if (!location.hash) {
      location.hash = '#/development';
    }
  };

  init = () => {
    this.checkEnv();
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

