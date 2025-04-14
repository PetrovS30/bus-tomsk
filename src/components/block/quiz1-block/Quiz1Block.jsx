import './quiz1-block.css';
import { useState } from 'react';

const Quiz1Block = () => {
    const [state, setState] = useState(1); // Начальное значение (1 из 5)

    return (
        <div className='quiz1-block__block'>
            <p className='quiz1-block__text'>
                Оцените ваше удовлетворением качеством общественного транспорта сейчас
            </p>
        
            <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={state}
                onChange={(e) => setState(parseInt(e.target.value))}
                className="quiz1-block__input"
            />

            <p className="quiz1-block__value">
                Текущая оценка: <strong>{state}</strong>
            </p>

            <div className="">
                <button className="quiz1-block__btn">
                    Далее
                </button>
            </div>
            
        </div>
    );
};

export default Quiz1Block;
