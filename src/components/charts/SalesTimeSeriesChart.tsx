import { theme } from 'antd';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    LineChart,
    Line,
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

export const SalesTimeSeriesChart = () => {
    const { token } = theme.useToken();
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width={'100%'} height="100%">
                <AreaChart
                    width={1230}
                    height={300}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={token.colorPrimary} stopOpacity={1} />
                            <stop offset="95%" stopColor={token.colorPrimary} stopOpacity={1} />
                        </linearGradient>
                        {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={token.colorBgLayout} stopOpacity={0.4} />
                    <stop offset="95%" stopColor={token.colorBgLayout} stopOpacity={0.5} />
                </linearGradient> */}
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                    <Area
                        type="monotone"
                        dataKey="pv"
                        stroke="#636060"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
    return (
        <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
        // <ResponsiveContainer width={800} height="80%" debounce={100}>
        //     <LineChart width={500} height={300} data={data}>
        //         <XAxis dataKey="name" />
        //         <YAxis />
        //         <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        //         <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        //         <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        //     </LineChart>
        //     {/* <LineChart data={data}>
        //         <CartesianGrid strokeDasharray="3 3" />
        //         <XAxis dataKey="name" />
        //         <YAxis />
        //         <Tooltip />
        //         <Line type="monotone" dataKey="pv" stroke={token.colorPrimary} strokeWidth={2} />
        //     </LineChart> */}
        // </ResponsiveContainer>
    );
    return (
        <ResponsiveContainer width="300" height="400">
            <>
                <LineChart width={300} height={100} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pv" stroke="#267dff" strokeWidth={2} />
                </LineChart>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        left: -20,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                    <Area
                        type="monotone"
                        dataKey="pv"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                    />
                    <Area
                        type="monotone"
                        dataKey="amt"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                    />
                    {/* <Area
                type="monotone"
                dataKey="uv"
                stroke="#267dff"
                fill="#267dff"
                fillOpacity={1}
                />  */}
                </AreaChart>
            </>
        </ResponsiveContainer>
    );
};
