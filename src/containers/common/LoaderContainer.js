import React, { Component, Fragment } from 'react';
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

  componentWillUnmount() {
    this.routerListener();
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Fragment>
        <LoadingBar isLoading={isLoading} />
      </Fragment>
    );
  }
}

export default withRouter(LoaderContainer);
