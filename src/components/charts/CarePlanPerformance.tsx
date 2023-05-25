import { theme } from 'antd';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: '30-40',
        Percentage: 60,
    },
    {
        name: '40-50',
        Percentage: 65,
    },
    {
        name: '50-60',
        Percentage: 45,
    },
    {
        name: '60-70',
        Percentage: 45,
    },
    {
        name: '70-80',
        Percentage: 35,
    },
    {
        name: '80-90',
        Percentage: 20,
    },
];

// React supports function components as a simple way to write components that
// only contain a render method without any state (the App component in this
// example).

export const CarePlanPerformance = () => {
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
                    {/* <Legend /> */}
                    <Bar dataKey="Percentage" fill={token.colorPrimary} />
                    {/* <Bar dataKey="uv" fill="#f2f2f2" /> */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
