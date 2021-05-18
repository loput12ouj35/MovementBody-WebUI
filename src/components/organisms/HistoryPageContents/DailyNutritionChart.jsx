import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { MESSAGES } from 'data';

const { carbon, protein, fat } = MESSAGES.common;

const DUMMY_DATA = [
  { date: '05-01', [carbon]: 55, [protein]: 7, [fat]: 150 },
  { date: '05-02', [carbon]: 13, [protein]: 146, [fat]: 37 },
  { date: '05-03', [carbon]: 147, [protein]: 64, [fat]: 75 },
  { date: '05-04', [carbon]: 42, [protein]: 162, [fat]: 13 },
  { date: '05-05', [carbon]: 80, [protein]: 6, [fat]: 182 },
];

// Caching object-type options.
const OPTIONS = {
  keys: [carbon, protein, fat],
  colors: ['#1a90ff', '#ff901a', '#ff1a90'],
  margin: { bottom: 30, left: 30, right: 70 },
  axisBottom: { tickSize: 5, tickPadding: 5 },
  axisLeft: { tickSize: 5, tickPadding: 5, tickRotation: -30 },
  legends: [
    {
      anchor: 'bottom-right',
      direction: 'column',
      translateX: 70,
      itemsSpacing: 2,
      itemWidth: 60,
      itemHeight: 20,
      itemDirection: 'left-to-right',
      itemOpacity: 0.85,
      symbolSize: 4,
    },
  ],
};

export default React.memo(function DailyNutritionChart() {
  return (
    <ResponsiveBar
      data={DUMMY_DATA}
      {...OPTIONS}
      indexBy="date"
      padding={0.5}
      labelTextColor="#eee"
      animate
      motionStiffness={90}
      motionDamping={15}
      gridYValues={5}
    />
  );
});
