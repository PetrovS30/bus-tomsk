import './quiz2-block.css';
import cat2 from './cat2.jpg';
import { useRef, useState } from 'react';
import { push, ref } from 'firebase/database';
import { toast } from 'react-toastify';
import { db } from '../../../useDataBase/useDataBase';

const userRef = ref(db, '/quizblock3');


const questions = [
  {
    id: 1,
    text: "Как бы вы решили проблемы с общественным транспортом?",
    options: [
      "Увеличили количество автобусов на маршруте",
      "Закупили новые автобусы",
      "Свой вариант"
    ]
  },
  {
    id: 2,
    text: "Что важнее всего улучшить в общественном транспорте?",
    options: [
      "Комфорт пассажиров",
      "Пунктуальность",
      "Свой вариант"
    ]
  },
  {
    id: 3,
    text: "Как часто вы пользуетесь общественным транспортом?",
    options: [
      "Ежедневно",
      "Несколько раз в неделю",
      "Свой вариант"
    ]
  }
];

const Quiz2Block = () => {
    const catRef = useRef();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [inputDisplay, setInputDisplay] = useState(false); 
    const [answers, setAnswers] = useState([]);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [customAnswer, setCustomAnswer] = useState(''); 
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    let customOptionRef = useRef(null);

    const handleChange = (event) => {
        if (event.target.id === 'option3') {
          setInputDisplay(true);
          setCurrentAnswer(event.target);
          setTimeout(() => customOptionRef.current?.focus(), 10);
        } else if(event.target.id === 'option1') {
            setCurrentAnswer(1);
            setCustomAnswer('');
            setInputDisplay(false);
        } else if(event.target.id === 'option2') {
            setCurrentAnswer(2);
            setCustomAnswer('');
            setInputDisplay(false);
        }
    };

    const handleCustomInputChange = (e) => {
        setCustomAnswer(e.target.value);
        setCurrentAnswer(e.target.value); 
    };

    const handleAnswer = async () => {
        if (!currentAnswer) {
            toast.warn('Пожалуйста, выберите вариант ответа');
            return;
        }

        const answerToSave = currentAnswer === 'option3' ? customAnswer : currentAnswer;
        const newAnswers = [...answers, answerToSave];

        if (currentQuestionIndex < questions.length - 1) {
            setAnswers(newAnswers);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentAnswer(null);
            setCustomAnswer('');
            setInputDisplay(false);
        } else {
            try {
                setLoading(true);
                await push(userRef, {
                    answers: [...newAnswers, answerToSave],
                    timestamp: new Date().toISOString()
                });
                toast.success('Спасибо за ваши ответы!');
                setSubmitted(true);
            } catch(e) {
                toast.error('Ошибка при сохранении ответов');
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
    };

    if (submitted) {
        return (
            <div className='quiz2-block'>
              <div className="quiz2-block__block">
                  <img 
                      ref={catRef}
                      className='' 
                      src={cat2} 
                      alt="cat" 
                  />
              </div>
              <div className="quiz2-block__background">
                  <div className="quiz2-block__left-background"></div>
                  <div className="quiz2-block__right-background"></div>
                  <div className="quiz2-block__grad"></div>
              </div>  
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className='quiz2-block'>
            <div className="quiz2-block__background">
                <div className="quiz2-block__left-background"></div>
                <div className="quiz2-block__right-background"></div>
                <div className="quiz2-block__grad"></div>
            </div>

            <div className="quiz2-block__block">
                <div className="quiz2-block__options">
                    <p className="quiz2-block__question">
                        {currentQuestion.text}
                    </p>
                    
                    {/* Вариант 1 */}
                    <div className="quiz2-block__option">
                      <input
                        className="quiz2-block__radio-input"
                        type="radio"
                        id="option1"
                        name="transport-options"
                        checked={currentAnswer === 1}
                        onChange={handleChange}
                      />
                      <label className="quiz2-block__option-label" htmlFor="option1">
                        {currentQuestion.options[0]}
                      </label>
                    </div>

                    {/* Вариант 2 */}
                    <div className="quiz2-block__option">
                      <input
                        className="quiz2-block__radio-input"
                        type="radio"
                        id="option2"
                        name="transport-options"
                        checked={currentAnswer === 2}
                        onChange={handleChange}
                      />
                      <label className="quiz2-block__option-label" htmlFor="option2">
                        {currentQuestion.options[1]}
                      </label>
                    </div>

                    {/* Вариант с текстовым вводом */}
                    <div className="quiz2-block__option">
                      <input
                        className="quiz2-block__radio-input"
                        type="radio"
                        id="option3"
                        name="transport-options"
                        checked={typeof currentAnswer === 'string'}
                        onChange={handleChange}
                      />
                      <label className="quiz2-block__option-label" htmlFor="option3">
                        {currentQuestion.options[2]}

                        <svg 
                          className={`quiz2-block__pencil ${inputDisplay ? 'quiz2-block__draw' : ''}`} 
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75 1.84-1.83z"/>
                          <path d="M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/>
                        </svg>

                        <div className={`quiz2-block__input-container ${inputDisplay ? 'quiz2-block__input-visible' : ''}`}>
                          <input
                            className="quiz2-block__text-input"
                            ref={customOptionRef}
                            type="text"
                            placeholder='Ваш вариант'
                            value={customAnswer}
                            onChange={handleCustomInputChange}
                          />
                        </div>
                      </label>
                    </div>
                </div>

                <button 
                  onClick={handleAnswer} 
                  className="quiz2-block__btn"
                  disabled={loading}
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Следующий вопрос' : 'Завершить опрос'}
                </button>
            </div>
        </div>
    )
}

export default Quiz2Block;