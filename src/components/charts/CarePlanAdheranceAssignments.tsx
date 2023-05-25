import { theme } from 'antd';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Month 1',
        Assignments: 150,
        Adherance: 65,
        amt: 2400,
    },
    {
        name: 'Month 2',
        Assignments: 180,
        Adherance: 85,
        amt: 2210,
    },
    {
        name: 'Month 3',
        Assignments: 200,
        Adherance: 90,
        amt: 2290,
    },
    {
        name: 'Month 4',
        Assignments: 220,
        Adherance: 90,
        amt: 2000,
    },
    {
        name: 'Month 5',
        Assignments: 150,
        Adherance: 85,
        amt: 2181,
    },
    {
        name: 'Month 6',
        Assignments: 220,
        Adherance: 140,
        amt: 2500,
    },
    {
        name: 'Month 7',
        Assignments: 230,
        Adherance: 160,
        amt: 2200,
    },
    {
        name: 'Month 8',
        Assignments: 230,
        Adherance: 180,
        amt: 1100,
    },
    {
        name: 'Month 9',
        Assignments: 200,
        Adherance: 170,
        amt: 2100,
    },
    {
        name: 'Month 10',
        Assignments: 240,
        Adherance: 180,
        amt: 1100,
    },
    {
        name: 'Month 11',
        Assignments: 260,
        Adherance: 200,
        amt: 3500,
    },
    {
        name: 'Month 12',
        Assignments: 260,
        Adherance: 180,
        amt: 3200,
    },
];

// React supports function components as a simple way to write components that
// only contain a render method without any state (the App component in this
// example).

export const CarePlanAdheranceAssignments = () => {
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
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={token.colorBgLayout} stopOpacity={0.7} />
                            <stop offset="95%" stopColor={token.colorBgLayout} stopOpacity={0.5} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="Assignments"
                        stroke={token.colorPrimary}
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                    <Area
                        type="monotone"
                        dataKey="Adherance"
                        stroke={token.colorBgLayout}
                        fillOpacity={1}
                        fill="url(#colorPv)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
