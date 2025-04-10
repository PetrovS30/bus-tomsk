import './quiz2-block.css';

const Quiz2Block = () => {

    return (
        <div className='quiz2-block'>
            <h2>Как бы вы решили проблемы <br/>с общественным траспортом?</h2>
            <div className='quiz2-block-inner'>
                <div className="radio-option">
                    <input type="radio" id="option1" name="options" />
                    <label htmlFor="option1">Увеличили количество автобусов на маршруте</label>
                </div>
                <div className="radio-option">
                    <input type="radio" id="option2" name="options" />
                    <label htmlFor="option2">Закупили новые автобусы</label>
                </div>
                <div className="radio-option">
                    <input  type="radio" id="option3" name="options" />
                    <input className='radio-option-input' type="text" placeholder='свой вариант' />
                </div>
            </div>
        </div>
    )
}

export default Quiz2Block;