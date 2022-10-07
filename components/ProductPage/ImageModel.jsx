import styles from '../../styles/Productpage/Product.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FreeMode, Thumbs } from "swiper";
import { useState } from 'react';

export default function ImageModel({ image, setDisplayModal }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className={styles.imageModelDiv}>
            <div className={styles.modelUpperPaint}>
                <button className={styles.closeButton} onClick={() => setDisplayModal(false)}>
                    <svg className="ws-icon ws-icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z"></path></svg>
                </button>
            </div>
            <div className={styles.modelSwiperDiv}>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Thumbs]}
                    className={styles.modelSwiperInnerDiv}
                >
                    {image.map((image, i) => (
                        <SwiperSlide key={i}>
                            <Image src={image.url} layout='fill' objectFit="contain" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className={styles.modelSwiperLowerDiv}
                >
                    {image.map((image, i) => (
                        <SwiperSlide key={i}>
                            <Image src={image.url} layout='fill' objectFit="contain" className={styles.modelImage} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    )
}
