import './quiz1-block.css';
import { useState } from 'react';

const Quiz1Block = () => {
    const [state, setState] = useState(1); // Начальное значение (1 из 5)

    // // Функция для изменения цвета в зависимости от значения
    // const getSliderColor = () => {
    //     const percentage = ((state - 1) / 4) * 100; // Преобразуем 1-5 в 0-100%
    //     const red = 255 - (percentage * 2.55); // Уменьшаем красный
    //     const green = 0 + (percentage * 2.55); // Увеличиваем зелёный
    //     return `rgb(${red}, ${green}, 0)`;
    // };

    return (
        <div className='quiz1-block__block'>
            <h1 className='quiz1-block__text'>Оцените ваше удовлетворением качеством общественного транспорта сейчас</h1>
        
            <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={state}
                onChange={(e) => setState(parseInt(e.target.value))}
                className="quiz1-block__input"
            />

            <p className="quiz1-block__value">Текущая оценка: <strong>{state}</strong></p>

            <div className="">
                <button className="quiz1-block__btn">Далее</button>
            </div>
            
        </div>
    );
};

export default Quiz1Block;
