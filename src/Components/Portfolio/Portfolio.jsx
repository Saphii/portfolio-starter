import React from 'react';
import './Portfolio.css';
import {Swiper,SwiperSlide} from "swiper/react";
import EBN from '../../img/EBN.jpg.jpg';
import psycoway from '../../img/psycoway.PNG';
import SMCOM from '../../img/SMCOM.jpg'
import 'swiper/css';


const Portfolio = () => {
    return (
    <div className='portfolio'>

        {/*heading */}
        <span>Projets Recents</span>
        <span>Portfolio</span>

        {/*slider */}
            <Swiper>
                <SwiperSlide>
                    <img src={EBN} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={psycoway} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SMCOM} alt=""/>
                </SwiperSlide>


            </Swiper>


    </div>

    );
};

export default Portfolio;