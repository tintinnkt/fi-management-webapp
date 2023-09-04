import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

function getMonthName(month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
}

function BarGraph({ data }) {
    const [chartData, setChartData] = useState([]);

    const processData = (data) => {
        const monthData = {};

        data.forEach(item => {
            const date = new Date(item.date);
            const monthYear = `${date.getFullYear()}-${date.getMonth()}`;
            const amount = parseFloat(item.amount);

            if (item.type === 'income') {
                if (monthData[monthYear]) {
                    monthData[monthYear].income += amount;
                } else {
                    monthData[monthYear] = { income: amount, expenses: 0 };
                }
            } else {
                if (monthData[monthYear]) {
                    monthData[monthYear].expenses += amount;
                } else {
                    monthData[monthYear] = { income: 0, expenses: amount };
                }
            }
        });

        const chartData = [['Month', 'Income', 'Expenses']];
        for (const key in monthData) {
            const [year, month] = key.split('-');
            chartData.push([`${getMonthName(parseInt(month))} ${year}`, monthData[key].income, monthData[key].expenses]);
        }

        return chartData;
    };

    useEffect(() => {
        const processedData = processData(data);
        setChartData(processedData);
        console.log(chartData)
    }, [data]);

    const options = {
        title: '',
        titleTextStyle: {
            fontSize: 12,
        },
        hAxis: {
            title: 'Amount',
        },
        vAxis: {
            title: 'Month',
            minValue: 0,
        },
        legend: {
            position: 'top',
        },
        bar: { groupWidth: '75%' },
        series: {
            0: { color: '#25a18e' },
            1: { color: '#ef6351' },
        },
    };

    return (
        <div className="graph-container">
            <Chart
                chartType="BarChart"
                width="100%"
                height="350px"
                data={chartData}
                options={options}
                />
        </div>
    );
}

export default BarGraph;
