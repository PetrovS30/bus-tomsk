import { useState} from 'react';
import './results-block.css';
import leftIcon from './svg-icon/free-icon-left.svg';
import rightIcon from './svg-icon/free-icon-right.svg';
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
    <div className='result-block'>
      <div className="result-block__background">
        <div className="result-block__left-background"></div>
        <div className="result-block__right-background"></div>
      </div>

      <div className='result-block__block'>
        <div className='result-block__left'>
          <div className=' result-block__left-rectangle'>
            <p className="result-block__title">
              Результаты
            </p>
          </div>
          <p className='result-block__text'>
            Спасибо за ответы!
          </p>
          <button className='result-block__btn'>Обновить</button>
        </div>
        <div className='result-block__right'>
        {charts[activeIndex]}
          <p className='result-block__legend'>
            {questions[activeIndex]}
          </p>
          <ul className='result-block__paginations'>
            <li><img src={rightIcon} alt="rightIcon" onClick={handlePrevClick} /></li>
            {charts.map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`result-block__pagination ${activeIndex === index? 'active1' : 'inactive1'}`}
                />
              </li>
            ))}
            <li><img src={leftIcon} alt="leftIcon" onClick={handleNextClick}/></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 

export default ResultsBlock;


