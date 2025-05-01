import './results-block.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from 'recharts';
import CustomBar from './customBar/CustomBar';

const data = [
    { name: 1, "всего оценок": 20 },
    { name: 2, "всего оценок": 41 },
    { name: 3, "всего оценок": 24 },
    { name: 4, "всего оценок": 18 },
    { name: 5, "всего оценок": 44 }
  ];

const MyBarChart2 = () => {
    const customTicks = [0, 50, 100, 150,  200];
    return (
    <div className='result-block__gistogram'>
        <BarChart barCategoryGap={0} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} width={500} height={300} data={data}  >
        <CartesianGrid strokeDasharray="3 3" fill="" stroke="none" />{/*фон */}
        <XAxis dataKey="name" stroke="#000" strokeWidth={1}>
            <Label offset={0} position="insideBottom" />
        </XAxis>
        <XAxis stroke="#FFFF" strokeWidth={15} dataKey="name" />
        <YAxis ticks={customTicks}  />
        <Tooltip />
        <Legend />
        <Bar  minPointSize={0} shape={<CustomBar />} barSize={100} stroke="#000" dataKey="всего оценок" fill="#ffc658" />
      </BarChart>

    </div>
    )
};
  
export default MyBarChart2;