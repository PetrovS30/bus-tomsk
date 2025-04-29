import React, { useEffect, useRef } from "react";
import './main-block.css';
import bus from './bus.jpg';

const MainBlock = () => {
    const busRef = useRef();

    useEffect(() => {
        if (busRef.current) {
            busRef.current.style.animation = "driveInFromRight 2s forwards";
        }
    }, []);

    return (
        <div className='main-block__block'>

            <div className="main-block__left-rectangle">
                <div className="main-block__title">
                    Пройдите небольшой опрос
                </div>
            </div>

            <p className='main-block__text'>
                Помогите нам улучшить качество общественного транспорта в городе
            </p>        
            
            <img 
                ref={busRef}
                className='main-block__bus' 
                src={bus} 
                alt="Автобус" 
            />
            
        </div>
    );
};

export default MainBlock;