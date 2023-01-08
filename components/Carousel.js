import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css';
import Image from 'next/image';

const Carousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{delay:2000}}
            speed={1000}
            infinite='true'
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <div className="image h-[20vh] md:h-[30vh] lg:h-[40vh] w-[100vw] block">
                    <Image src={'/Carousel/1.webp'} fill alt="slide1"></Image>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="image h-[20vh] md:h-[30vh] lg:h-[40vh] w-[100vw] block">
                    <Image src={'/Carousel/2.webp'} fill alt="slide2"></Image>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="image h-[20vh] md:h-[30vh] lg:h-[40vh] w-[100vw] block">
                    <Image src={'/Carousel/3.webp'} fill alt="slide3"></Image>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel