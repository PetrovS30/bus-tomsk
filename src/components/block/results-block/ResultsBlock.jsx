import './results-block.css';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';


const data = [
    { name: '1', uv: 4000, pv: 2400, amt: 2400 },
    { name: '2', uv: 3000, pv: 1398, amt: 2210 },
    { name: '3', uv: 2000, pv: 9800, amt: 2290 },
    { name: '4', uv: 2780, pv: 3908, amt: 2000 },
    { name: '5', uv: 1890, pv: 4800, amt: 2181 },
];

const MyLineChart = () => {
    return (
        <ResponsiveContainer width={717} height={477}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};



const ResultsBlock = () => {
    return (
        <div className='results-block-container'>
            <div className='results-block-container-graph'>
                <MyLineChart/>
            </div>
            <span>
                Спасибо за ответы!
            </span>
        </div>
    )
}




export default ResultsBlock;