import './page-header.css';
import tomsklogo from './tomskoj-1.png';

const PageHeader = () => {
    return (
        <div className='page-header__block'>
            <h1 className='page-header__title'>Автобусы Томской Области</h1>
            <img className='page-header__logo' src={tomsklogo} alt="logo" />
        </div>
    )
}

export default PageHeader;

