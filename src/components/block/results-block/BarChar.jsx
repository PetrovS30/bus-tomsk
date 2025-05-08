import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from 'recharts';
import CustomBar from './customBar/CustomBar';

const UseBarChart = ({data}) => {
  const customTicks = [0, 10, 20, 30, 40, 50];
    return (
      <>
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
      </>
    )
}

export default UseBarChart;