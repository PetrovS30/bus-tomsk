import './results-block.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from 'recharts';
import CustomBar from './customBar/CustomBar';
import {  useState } from 'react';
import { get, getDatabase, ref } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCWwywrSSV5LSMeGVI0gWGVwYLJo6XKt-A",
  authDomain: "bus-train-cd2c6.firebaseapp.com",
  databaseURL: "https://bus-train-cd2c6-default-rtdb.firebaseio.com",
  projectId: "bus-train-cd2c6",
  storageBucket: "bus-train-cd2c6.firebasestorage.app",
  messagingSenderId: "688491898760",
  appId: "1:688491898760:web:f8bad687505d8cdb4ebc3d",
  measurementId: "G-9C7NRE1Q2J"
};


const firebaseApp = initializeApp(firebaseConfig);//инициализации приложения Firebase
const db = getDatabase(firebaseApp);//получения экземпляра базы данных Realtime Database от Firebase
const userRef1 = ref(db, '/question1');//ссылка на корневой узел


const MyBarChart1 = () => {
  const [data, setData] = useState([
    { name: 1, "всего оценок": 0 },
    { name: 2, "всего оценок": 0 },
    { name: 3, "всего оценок": 0 },
    { name: 4, "всего оценок": 0 },
    { name: 5, "всего оценок": 0 }
  ]);


    get(userRef1)
     .then((snapshot) => {
        if (snapshot.exists()) {
          const question1Data = snapshot.val();
          const values = Object.values(question1Data);
          const value1s = values.map((value) => value.answer1);
          const newData = [
            { name: 1, "всего оценок": 0 },
            { name: 2, "всего оценок": 0 },
            { name: 3, "всего оценок": 0 },
            { name: 4, "всего оценок": 0 },
            { name: 5, "всего оценок": 0 }
          ];
          value1s.forEach((value) => {
            newData[value - 1]["всего оценок"] += 1;
          });
          setData(newData);
        } else {
          console.log('No data available');
        }
      })
     .catch((error) => {
        console.error(error);
      });

    const customTicks = [0, 10, 20, 30, 40, 50];
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
  
export default MyBarChart1;