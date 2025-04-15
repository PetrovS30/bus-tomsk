import './results-block.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from 'recharts';

const data = [
    { name: 1, "всего оценок": 20 },
    { name: 2, "всего оценок": 22 },
    { name: 3, "всего оценок": 90 },
    { name: 4, "всего оценок": 50 },
    { name: 5, "всего оценок": 144 }
  ];

  const CustomBar = ({ x, y, width, height, fill }) => {
    const strokeColor = '#3f5f95'; // Цвет обводки
    const strokeWidth = 2; // Ширина обводки
    return (
      <rect
      stroke={strokeColor} // Цвет обводки
      strokeWidth={strokeWidth} // Ширина
          x={x + 5} // Устанавливаем отступ слева
          y={y}
          width={width - 10} // Уменьшаем ширину для создания отступа справа
          height={height}
          fill={fill}
      />
  );
  };

  const MyBarChart = () => {
    
    const customTicks = [0, 50, 100, 150,  200];
    return (
    <div style={{ backgroundColor: '#fff', margin:" 0 auto",marginTop: "74px", width: "500px", height: "300px"}}>
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
  

const ResultsBlock = () => {
    return (
        <div className='result-block__block'>
            <MyBarChart/>
            <h2>Спасибо за ответы!</h2>
        </div>
    )
} 

export default ResultsBlock;


