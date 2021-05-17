import { inject, observer } from 'mobx-react';
import { Pie } from '@nivo/pie';
import React from 'react';

const CHART_THEME = { fontFamily: 'inherit' };
const COLORS = ['#901aff', '#1a90ff', '#ff1a90'];

@inject('userDailyRecordStore')
@observer
class NutritionBar extends React.PureComponent {
  get data() {
    const { userDailyRecordStore, types } = this.props;
    const { currentNutrition } = userDailyRecordStore;

    return types.map((type) => ({
      id: type,
      label: type,
      value: currentNutrition[type],
    }));
  }

  render() {
    return (
      <Pie
        innerRadius={0.9}
        data={this.data}
        colors={COLORS}
        enableRadialLabels={false}
        enableSlicesLabels={false}
        theme={CHART_THEME}
        width={140}
        height={140}
      />
    );
  }
}

export default NutritionBar;
