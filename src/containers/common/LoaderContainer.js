import React, { Component } from 'react';
import { LoadingBar, LoadingCircle } from 'components';
import { withRouter } from 'react-router-dom';

class LoaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };

    this.interval = 500;
    this.bindRouteChangeEvent();
  }

  componentWillUnmount() {
    this.routerListener();
  }

  showLoader = () => {
    this.setState({
      isLoading: true,
    });
  };

  hideLoader = () => {
    this.setState({
      isLoading: false,
    });
  };

  bindRouteChangeEvent = () => {
    this.routerListener = this.props.history.listen((location, action) => {
      console.log('routeChangeEvent', location, action);

      this.showLoader();
      setTimeout(this.hideLoader, this.interval);
    });
  };

  render() {
    const { isLoading } = this.state;

    return <LoadingBar isLoading={isLoading} />;
  }
}

export default withRouter(LoaderContainer);
