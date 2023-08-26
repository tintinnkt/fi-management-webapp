import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import dt from '../../service/data/Record.json';

function getMonthName(month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
}

function BarGraph() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const groupedData = dt.reduce((acc, entry) => {
            const date = new Date(entry.date);
            const month = date.getMonth();
            const year = date.getFullYear();
            const category = entry.type === 'income' ? 'income' : 'expense';

            const my = `${year}-${month}`;
            if (!acc[my]) {
                acc[my] = {
                    month: `${year}-${month}`,
                    income: 0,
                    expense: 0,
                };
            }

            acc[my][category] += entry.amount;
            return acc;
        }, [dt]);

        const formattedData = Object.values(groupedData).map(({ month, income, expense }) => {
            const [year, monthNum] = month.split('-');
            const monthName = getMonthName(parseInt(monthNum, 10));
            return [`${year}-${monthName}`, income, expense];
        });

        setChartData([
            ['Month', 'Income', 'Expense'],
            ...formattedData,
        ]);
    }, []);

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
        bar: { groupWidth: '40%' },
    };

    return (
        <div className="graph-container">
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={chartData}
                options={options}
            />
        </div>
    );
}

export default BarGraph;
