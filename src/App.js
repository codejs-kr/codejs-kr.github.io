import React, { Component, Fragment, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoaderContainer } from 'containers';
import { Toy, About, Development, Loading, DevelopmentDetails, NotFound } from 'pages';
import config from 'helpers/config';
import utils from 'helpers/utils';
import _ from 'lodash';
import 'statics/scss/main.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.body = document.querySelector('body');
    this.init();
  }

  init = () => {
    this.checkEnv();
    this.bindScrollEvent();
  };

  checkEnv = () => {
    this.body.classList.add(config.isMobile ? 'mobile' : 'pc');

    if (!location.hash || location.hash.length < 3) {
      location.hash = '#/development';
    }
  };

  onScroll = () => {
    // console.log('onScroll', window.scrollY);
    this.body.classList[window.scrollY > 160 ? 'add' : 'remove']('scrolled');

    utils.setStorageScroll({
      page: location.hash.replace('#/', ''),
      top: window.scrollY,
    });
  };

  bindScrollEvent = () => {
    const { onScroll } = this;
    const interval = 150;

    window.onscroll = _.debounce(onScroll, interval);
  };

  render() {
    return (
      <Fragment>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Development} />
            <Route exact path="/toy" component={Toy} />
            <Route exact path="/development" component={Development} />
            <Route path="/development/:name" component={DevelopmentDetails} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>

        <LoaderContainer />
      </Fragment>
    );
  }
}

export default App;
