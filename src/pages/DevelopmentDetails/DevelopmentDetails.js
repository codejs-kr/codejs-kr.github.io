import React, { Component } from 'react';
import { PageTemplate, DevelopmentDetailTemplate } from 'components';

class DevelopmentDetails extends Component {
  render() {
    const { match } = this.props;
    const { name } = match.params;
    console.log('확인 name', name, match);

    return (
      <PageTemplate>
        <DevelopmentDetailTemplate title={name}>
          do something
        </DevelopmentDetailTemplate>
      </PageTemplate>
    );
  }
}

export default DevelopmentDetails;
