import './team-page.css';
import Develop from './develop.svg?react';


const TeamPage = () => {
    return(
        <div className='team-page'>
            <div className='team-page__left'>
                <div className='team-page__left-rectangle'>
                    <p className='team-page__rectangle-text'>
                      Разработчики
                    </p>
                </div>
                <p className='team-page__title'>Frontend & backend</p>
                <p className='team-page__text'>Lim Vitaly</p>
                <p className='team-page__text'>Petrov Sergey</p>
            </div>
        </div>
    )
}

export default TeamPage;