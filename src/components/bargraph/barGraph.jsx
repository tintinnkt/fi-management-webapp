import React from 'react';
import { Chart } from 'react-google-charts';
import dt from '../../service/data/Record.json';

// Helper function to get month name from month number
function getMonthName(month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
}

function BarGraph() {
    // Group data by month and type (income/need/want)
    const groupedData = dt.reduce((acc, entry) => {
        const date = new Date(entry.date);
        const month = date.getMonth();
        const year = date.getFullYear();
        const category = entry.type === 'income' ? 'income' : 'expense';

        const key = `${year}-${month}`;
        if (!acc[key]) {
            acc[key] = {
                month: `${year}-${month}`,
                income: 0,
                expense: 0,
            };
        }

        acc[key][category] += entry.amount;
        return acc;
    }, {});

    // Convert grouped data object into an array
    const chartData = Object.values(groupedData);

    // Define options for the chart
    const options = {
        title: 'Income and Expenses Comparison',
        hAxis: {
            title: 'Month',
        },
        vAxis: {
            title: 'Amount',
            minValue: 0,
        },
        legend: {
            position: 'top',
        },
    };

    // Format labels to include month name
    const chartFormattedData = chartData.map(({ month, income, expense }) => {
        const [year, monthNum] = month.split('-');
        const monthName = getMonthName(parseInt(monthNum, 10));
        return [`${year}-${monthName}`, income, expense];
    });

    return (
        <div className="graph-container">
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={[
                    ['Month', 'Income', 'Expense'],
                    ...chartFormattedData,
                ]}
                options={options}
            />
        </div>
    );
}

export default BarGraph;
