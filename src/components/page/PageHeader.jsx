import './page-header.css';
// import { ReactComponent as Home } from './home.svg';
import Home from './home.svg?react';
import Man from './man.svg?react';

// import { ReactComponent as Man } from './man.svg';

const PageHeader = () => {
    return (
        <div className='page-header__block'>
            <p className='page-header__text'>Автобусы Томской Области</p>
            <nav className="page-header__nav">
                <p className='page-header__block-main' href="">Главная</p>
                <p className='page-header__block-developers' href="">Разработчики</p>
                <Home width={14} height={14}  className='page-header__home' />
                <Man width={14} height={14} fill="white" className='page-header__man' />
            </nav>
            
        </div>
    )
}

export default PageHeader;

