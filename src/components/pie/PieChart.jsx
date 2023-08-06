import React from 'react';
import { Chart } from 'react-google-charts';

function PieChart({ data }) {
  const typeAmounts = {};

  data.forEach(item => {
    if (item.name in typeAmounts) {
      typeAmounts[item.name] += item.amount;
    } else {
      typeAmounts[item.name] = item.amount;
    }
  });

  const totalAmount = data.reduce((total, item) => total + item.amount, 0);

  // Sort the expense types by amount in descending order
  const sortedTypes = Object.keys(typeAmounts).sort((a, b) => typeAmounts[b] - typeAmounts[a]);

  // Take the top 6 expense types and calculate the sum of the rest
  let top6Total = 0;
  let otherTotal = 0;
  for (let i = 0; i < sortedTypes.length; i++) {
    if (i < 6) {
      top6Total += typeAmounts[sortedTypes[i]];
    } else {
      otherTotal += typeAmounts[sortedTypes[i]];
    }
  }

  const chartData = [['Type', 'Percentage']];
  for (let i = 0; i < sortedTypes.length; i++) {
    if (i < 6) {
      const percentage = (typeAmounts[sortedTypes[i]] / totalAmount) * 100;
      chartData.push([sortedTypes[i], percentage]);
    }
  }
  if (otherTotal > 0) {
    const otherPercentage = (otherTotal / totalAmount) * 100;
    chartData.push(['Other', otherPercentage]);
  }

  return (
    <Chart
      width={'500px'}
      height={'300px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={{
        title: 'Expense Type Ratio',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
}

export default PieChart;
