import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import styles from '../../styles/Productpage/Product.module.css'

import Image from 'next/image'

export default function ImageSlider({ image, setDisplayModal }) {
  return (
    <button className={styles.sliderMainDiv} onClick={()=> setDisplayModal(true)}>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.slider}
      >
        {image.map((image, i) => (
          <SwiperSlide key={i}>
            <Image src={image.url} layout='fill' objectFit="contain" priority={i === 0 ? true : false}/>
          </SwiperSlide>
        )) }
      </Swiper>
    </button>
  )
}
