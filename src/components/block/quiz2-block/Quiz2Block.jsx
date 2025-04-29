import './quiz2-block.css';
import { useRef, useState } from 'react';

const Quiz2Block = () => {
    const[inputDisplay, setInputDisplay] = useState(false); 
    let customOptionRef = useRef(null);

    const handleChange = (event) => {
        console.log('handleChange');
        if (event.target.id === 'option3') {
            customOptionRef.current.focus();
            setInputDisplay(true);
        } else if(event.target.id !== 'option3'){
            setInputDisplay(false);
            customOptionRef === null;
        }
    };

        return (
        <div className='quiz2-block__block'>
            <h2>Как бы вы решили проблемы <br/>с общественным траспортом?</h2>
            <div className='quiz2-block__inner'>
                <div className="quiz2-block__radio-option  ">
                    <input  className='quiz2-block__radio-input radio-mark'  onClick={() => handleChange(event)} type="radio" id="option1" name="options" />
                    <label className='label-label' htmlFor="option1">Увеличили количество автобусов на маршруте</label>
                </div>
                <div className="quiz2-block__radio-option ">
                    <input className='quiz2-block__radio-input radio-mark'   onClick={() => handleChange(event)} type="radio" id="option2" name="options" />
                    <label className='label-label'  htmlFor="option2">Закупили новые автобусы</label>
                </div>
                <div className="quiz2-block__radio-option">
                    <input className='quiz2-block__radio-input radio-mark' 
                    onClick={() => handleChange(event)}  type="radio" id="option3" name="options"  />
                    <label className='label-label' htmlFor="option3">Свой вариант</label>
                    <input
                    className={inputDisplay? 'quiz2-block__radio-option-input--text-displayOn' : 'quiz2-block__radio-option-input--text-displayOff'}
                    ref={customOptionRef} 
                    type="text" />
                </div>
            </div>
            <button className='quiz2-block__block-answer'>Ответить</button>
        </div>
    )
}

export default Quiz2Block;


