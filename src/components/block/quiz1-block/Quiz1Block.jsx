import './quiz1-block.css';
import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../../../useDataBase/useDataBase';

const userRef1 = ref(db, '/question1');//ссылка на корневой узел
const userRef2 = ref(db, '/question2');//ссылка на корневой узел
const userRef3 = ref(db, '/question3');//ссылка на корневой узел

// Вопросы
const questions = [
  'Насколько вам нравятся томские автобусы сейчас?',
  'Оцените удобство расписания движения транспорта',
  'Насколько вы довольны чистотой в транспорте?'
];

const Quiz1Block = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentValue, setCurrentValue] = useState(null); // Начинаем с нейтрального значения (3)
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  // Обработчик выбора смайлика
  const handleSmileyClick = (value) => {
    setCurrentValue(value);
  };

  const handleNext = async () => {
    const newAnswers = [...answers, currentValue];

    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
      setCurrentValue(null); // сброс к нейтральному значению
    } else {
      // последний ответ
      const finalAnswers = [...newAnswers];
        try {
          await push(userRef1, {answer1: finalAnswers[0]}); 
          await push(userRef2, {answer2: finalAnswers[1]}); 
          await push(userRef3, {answer3: finalAnswers[2]}); 

        } catch (err) {
          setToast('Произошла ошибка при отправке ответов', err);
        }

        setSubmitted(true);
        setTimeout(() => setToast(null), 3000);
      }
    };

 const handleViewStats = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/stats');
      if (response.ok) {
        setToast('Статистика успешно собрана и доступна в консоли сервера!');
      } else {
        throw new Error('Ошибка при сборе статистики');
      }
    } catch (err) {
      setToast('Произошла ошибка при попытке собрать статистику.', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <div className="quiz1-block__background">
          <div className="quiz1-block__grad"></div>
          <div className="quiz1-block__left-background"></div>
          <div className="quiz1-block__right-background"></div>
        </div>
        <div className="quiz1-block__block">
        {toast && <div className="quiz1-block__toast">{toast}</div>}
        {!loading && (
          <button className="quiz1-block__btn" onClick={handleViewStats} >
            Просмотреть статистику
          </button>
        )}
        {loading && <span>Сбор статистики...</span>}
      </div>
      </>
      
    );
  }

  return (
    <>
      <div className="quiz1-block__background">
        <div className="quiz1-block__grad"></div>
        <div className="quiz1-block__left-background"></div>
        <div className="quiz1-block__right-background"></div>
      </div>
      <div className='quiz1-block__block'>
      <p className='quiz1-block__text'>{questions[currentQuestion]}</p>

      <div className="feedback">
        <label 
          className={`angry ${currentValue === 1 ? 'active' : ''}`} 
          onClick={() => handleSmileyClick(1)}
        >
          <input 
            name="feedback" 
            defaultValue={1} 
            type="radio" 
            checked={currentValue === 1}
            onChange={() => {}}
          />
          <div>
            <svg className="eye left" />
            <svg className="eye right" />
            <svg className="mouth" />
          </div>
        </label>
        <label 
          className={`sad ${currentValue === 2 ? 'active' : ''}`} 
          onClick={() => handleSmileyClick(2)}
        >
          <input 
            name="feedback" 
            defaultValue={2} 
            type="radio" 
            checked={currentValue === 2}
            onChange={() => {}}
          />
          <div>
            <svg className="eye left" />
            <svg className="eye right" />
            <svg className="mouth" />
          </div>
        </label>
        <label 
          className={`ok ${currentValue === 3 ? 'active' : ''}`} 
          onClick={() => handleSmileyClick(3)}
        >
          <input 
            name="feedback" 
            defaultValue={3} 
            type="radio" 
            checked={currentValue === 3}
            onChange={() => {}}
          />
          <div />
        </label>
        <label 
          className={`good ${currentValue === 4 ? 'active' : ''}`} 
          onClick={() => handleSmileyClick(4)}
        >
          <input 
            name="feedback" 
            defaultValue={4} 
            type="radio" 
            checked={currentValue === 4}
            onChange={() => {}}
          />
          <div>
            <svg className="eye left" />
            <svg className="eye right" />
            <svg className="mouth" />
          </div>
        </label>
        <label 
          className={`happy ${currentValue === 5 ? 'active' : ''}`} 
          onClick={() => handleSmileyClick(5)}
        >
          <input 
            name="feedback" 
            defaultValue={5} 
            type="radio" 
            checked={currentValue === 5}
            onChange={() => {}}
          />
          <div>
            <svg className="eye left" />
            <svg className="eye right" />
          </div>
        </label>
      </div>
      <svg style={{display: 'none'}} xmlns="http://www.w3.org/2000/svg">
        <symbol id="eye" viewBox="0 0 7 4" xmlns="http://www.w3.org/2000/svg">
          <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1" />
        </symbol>
        <symbol id="mouth" viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg">
          <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5" />
        </symbol>
      </svg>

      <p className="quiz1-block__value">
        Текущая оценка: <strong>{currentValue}</strong>
      </p>

      <button className="quiz1-block__btn" onClick={handleNext}>
        Далее
      </button>

      {toast &&<div className="quiz1-block__toast">{toast}</div>}
    </div>
    </>
    
  );
};

export default Quiz1Block;
