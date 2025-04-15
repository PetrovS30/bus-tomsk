import './quiz2-block.css';
import { useRef } from 'react';

const Quiz2Block = () => {
    const customOptionRef = useRef(null);

    const handleChange = (event) => {
        if (event.target.checked) {
            customOptionRef.current.focus();
        }
    };

    return (
        <div className='quiz2-block__block'>
            <h2>Как бы вы решили проблемы <br/>с общественным траспортом?</h2>
            <div className='quiz2-block__inner'>
                <div className="quiz2-block__radio-option  ">
                    <input  className='quiz2-block__radio-input radio-mark' type="radio" id="option1" name="options" />
                    <label className='label-label' htmlFor="option1">Увеличили количество автобусов на маршруте</label>
                </div>
                <div className="quiz2-block__radio-option ">
                    <input className='quiz2-block__radio-input radio-mark' type="radio" id="option2" name="options" />
                    <label className='label-label'  htmlFor="option2">Закупили новые автобусы</label>
                </div>
                <div className="quiz2-block__radio-option">
                    <input className='quiz2-block__radio-input radio-mark' 
                    onClick={handleChange} type="radio" id="option3" name="options"  />
                    <label className='label-label' htmlFor="option3">Свой вариант</label>
                    <input className='quiz2-block__radio-option-input--text' 
                    ref={customOptionRef} 
                    type="text" />
                </div>
            </div>
        </div>
    )
}

export default Quiz2Block;


