import './main-block.css';
import bus1 from './bus1.png';
import bus2 from './bus2.png';

const MainBlock = () => {
    return (
        <div className='main-block__block'>
            <img className='main-block__bus1' src={bus1} alt="logo" />
            <h1 className='main-block__text'>Дорогие Томичи, помогите улучшить качество общественного транспорта в городе - пройдите небольшой опрос прямо у нас на сайте!</h1>
            <img className='main-block__bus2' src={bus2} alt="logo" />
        </div>
    )
} 

export default MainBlock;
