import { inject, observer } from 'mobx-react';
import { ResponsivePie } from '@nivo/pie';
import React from 'react';

const CHART_THEME = { fontFamily: 'inherit' };
const COLORS = ['#901aff', '#1a90ff', '#ff1a90'];

@inject('userDailyRecordStore')
@observer
class NutritionChart extends React.PureComponent {
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
      <ResponsivePie
        innerRadius={0.9}
        data={this.data}
        colors={COLORS}
        enableRadialLabels={false}
        enableSlicesLabels={false}
        theme={CHART_THEME}
      />
    );
  }
}

export default NutritionChart;
