import './results-block.css';
import { ref } from 'firebase/database';
import useDataState from '../../../useDataBase/useDataBase';
import { db, fetchAndProcessData } from '../../../useDataBase/useDataBase';
import UseBarChart from './BarChar';

const userRef = ref(db, '/question3');//ссылка на корневой узел

const MyBarChart1 = () => {
  const {data, setData} = useDataState();//инициализация state
  fetchAndProcessData(userRef, setData, 'answer3'); // 

    return (
      <div className='result-block__gistogram'>
          <UseBarChart data={data}/>
      </div>
    )
};
  
export default MyBarChart1;