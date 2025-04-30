import { useState } from 'react';
import './results-block.css';
import leftIcon from './free-icon-left.svg';
import rightIcon from './free-icon-right.svg';
import MyBarChart1 from './MyBarChart1';
import MyBarChart2 from './MyBarChart2';
import MyBarChart3 from './MyBarChart3';



const ResultsBlock = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const charts = [
    <MyBarChart1 key={0}/>,
    <MyBarChart2 key={1}/>,
    <MyBarChart3 key={2}/>,
  ];

  const questions = [
    'Качество автобусов',
    'Движение транспорта',
    'Чисто в транспорте?'
  ];

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + charts.length) % charts.length);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % charts.length);
  };

    return (
        <div className='result-block__block'>
          <div className='result-block__block-left'>
            <div className=' result-block__block-left-results'>Результаты</div>
            <h2>Спасибо за ответы!</h2>
            <button>Обновить данные</button>
          </div>
          <div className='result-block__block-right'>
          {charts[activeIndex]}
            <h2 style={{margin: '0 auto', width: "418px", textAlign: "center", color: 'black', fontSize: 40}}>{questions[activeIndex]}</h2>
            <div className='result-block__block-right-paginations'>
              <ul style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <li><img src={rightIcon} alt="rightIcon" onClick={handlePrevClick} /></li>
                <li><button className='result-block__block-right-paginations-btn'></button></li>
                <li><button className='result-block__block-right-paginations-btn'></button></li>
                <li><button className='result-block__block-right-paginations-btn'></button></li>
                <li><img src={leftIcon} alt="leftIcon" onClick={handleNextClick}/></li>
              </ul>
            </div>
          </div>
        </div>
    )
} 

export default ResultsBlock;


