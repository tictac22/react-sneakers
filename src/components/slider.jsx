import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from "react"
import s from "../styles/slider.module.scss"
export const Slider =  () => {
        return (
          <div className={s.slider}>
          <div className={`${s.arrow} ${s.arrow__fake}`}>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0.999999L6 6L1 11" stroke="#C8C8C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
            <Carousel
            className={s.example} 
            renderArrowNext={(clickHandler, hasNext, label)=>{
              return (
                <div onClick={clickHandler} className={s.arrow}>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0.999999L6 6L1 11" stroke="#C8C8C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )
            }}
            showThumbs={false} 
            showIndicators={false} 
            infiniteLoop={true} 
            emulateTouch={true} 
            swipeable={true} 
            showStatus={false} 
            showIndicators={false} 
            showArrows={false}
            autoPlay={true}>
                <div>
                    <img src="/images/slider.jpg" className={s.image}  />
                </div>
                <div>
                    <img src="/images/slider.jpg" className={s.image} />
                    
                </div>
                <div>
                    <img src="/images/slider.jpg"  className={s.image} />
                    
                </div>
            </Carousel>
          </div>
        );

};