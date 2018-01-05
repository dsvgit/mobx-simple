import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { getUrl } from 'src/app/framework/url';
import BaseLayout from 'src/app/components/BaseLayout';

@inject('homeStore')
@observer
class HomePage extends Component {
  render() {
    const { homeStore: { title } } = this.props;

    return (
      <BaseLayout align="center" title={title}>
        <div>title</div>
        <div>{getUrl('api')}</div>
      </BaseLayout>
    );
  }
}

export default HomePage;
