import { theme } from 'antd';
import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Week 1',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Week 2',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Week 3',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Week 4',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Week 5',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Week 6',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Week 7',
        uv: 3600,
        pv: 4500,
        amt: 2200,
    },
    {
        name: 'Week 8',
        uv: 2300,
        pv: 3300,
        amt: 1100,
    },
    {
        name: 'Week 9',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Week 10',
        uv: 2300,
        pv: 3300,
        amt: 1100,
    },
    {
        name: 'Week 11',
        uv: 4490,
        pv: 6300,
        amt: 3500,
    },
    {
        name: 'Week 12',
        uv: 5490,
        pv: 7300,
        amt: 3200,
    },
];

// React supports function components as a simple way to write components that
// only contain a render method without any state (the App component in this
// example).

export const QuantityTimeSeriesChart = () => {
    const { token } = theme.useToken(); // #267dff
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width={'100%'} height="100%">
                <BarChart
                    width={1200}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        left: -20,
                        bottom: 0,
                    }}
                    // margin={{
                    //     top: 5,
                    //     right: 30,
                    //     left: 20,
                    //     bottom: 5,
                    // }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill={token.colorPrimary} />
                    <Bar dataKey="uv" fill="#f2f2f2" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
