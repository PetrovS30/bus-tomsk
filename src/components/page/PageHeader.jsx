import './page-header.css';
import tomsklogo from './logo-svg.svg';

const PageHeader = () => {
    return (
        <div className='page-header__block'>
            <h1 className='page-header__text'>Автобусы Томской Области</h1>
            <div className="page-header__right-block">
                <img className='page-header__logo' src={tomsklogo} alt="logo" />
            </div>
        </div>
    )
}

export default PageHeader;

