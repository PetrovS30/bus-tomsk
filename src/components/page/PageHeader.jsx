import './page-header.css';
import Home from './home.svg?react';
import Man from './man.svg?react';
import { Link } from 'react-router-dom';



const PageHeader = () => {
    return (
        <div className='page-header'>
            <div className='page-header__block'>
                <p className='page-header__text'>Автобусы Томской Области</p>
                <nav className="page-header__nav">
                    <Link to="/" className="page-header__link">Главная</Link>
                    <Link to="/team" className="page-header__link">Разработчики</Link>

                    <Link to="/">
                        <Home width={14} height={14}  className='page-header__home' />
                    </Link>

                    <Link to="/team">
                        <Man width={14} height={14}  className='page-header__man' />
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default PageHeader;

