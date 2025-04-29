import './page-header.css';

const PageHeader = () => {
    return (
        <div className='page-header__block'>
            <h1 className='page-header__text'>Автобусы Томской Области</h1>
            <a className='page-header__block-main' href="">Главная</a>
            <a className='page-header__block-developers' href="">Разработчики</a>
        </div>
    )
}

export default PageHeader;

