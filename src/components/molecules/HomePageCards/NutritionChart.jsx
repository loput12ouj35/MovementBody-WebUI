import { ResponsivePie } from '@nivo/pie';
import React from 'react';

const CHART_THEME = { fontFamily: 'inherit' };

export default React.memo(function NutritionChart(props) {
  const { data, colors } = props;

  return (
    <ResponsivePie
      innerRadius={0.9}
      data={data}
      colors={colors}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      theme={CHART_THEME}
    />
  );
});
