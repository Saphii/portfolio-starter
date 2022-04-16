import React, {useContext} from 'react';
import './Portfolio.css';
import {Swiper,SwiperSlide} from "swiper/react";
import EBN from '../../img/EBN.jpg.jpg';
import psycoway from '../../img/psycoway.jpg';
import SMCOM from '../../img/SMCOM.jpg'
import 'swiper/css';
import { themeContext } from "../../Context";


const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
    <div className='portfolio'>

        {/*heading */}
        <span style={{color: darkMode?'white': ''}}>Projets Recents</span>
        <span>Portfolio</span>

        {/*slider */}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
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