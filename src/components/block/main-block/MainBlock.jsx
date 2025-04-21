import React, { useEffect, useRef } from "react";
import './main-block.css';
import bus1 from './bus1.png';
import bus2 from './bus2.png';

const MainBlock = () => {
    const bus1Ref = useRef();
    const bus2Ref = useRef();

    useEffect(() => {
        if (bus1Ref.current && bus2Ref.current) {
            bus1Ref.current.style.animation = "driveInFromLeft 2s forwards";
            bus2Ref.current.style.animation = "driveInFromRight 2s forwards";
        }
    }, []);

    return (
        <div className='main-block__block'>

            <p className='main-block__text'>
                Дорогие Томичи, помогите улучшить качество общественного транспорта в городе - пройдите небольшой опрос прямо у нас на сайте!
            </p>

            
            <img
                ref={bus1Ref}
                src={bus1}
                alt="Автобус 1"
                className="main-block__bus1"
            />
            
            
            <img 
                ref={bus2Ref}
                className='main-block__bus2' 
                src={bus2} 
                alt="Автобус 2" 
            />
            
        </div>
    );
};

export default MainBlock;