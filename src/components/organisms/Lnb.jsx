import { inject, observer } from 'mobx-react';
import 'scss/lnb.scss';
import React from 'react';

@inject('navigatorStore')
@observer
class Lnb extends React.PureComponent {
  render() {
    const { navigatorStore } = this.props;

    return (
      <div className={'lnb' + (navigatorStore.lnbOpen ? ' open' : '')}>
        <p>처신 잘하라구</p>
      </div>
    );
  }
}

export default Lnb;
