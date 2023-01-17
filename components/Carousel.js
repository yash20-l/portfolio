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
            className='py-[2rem]'
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{delay:2000}}
            speed={1000}
            infinite='true'
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <div className="image h-[15vh] md:h-[30vh] lg:h-[40vh] w-[100vw] block">
                    <Image src={'/Carousel/3.jpg'} fill alt="slide2"></Image>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="image h-[15vh] md:h-[30vh] lg:h-[40vh] w-[100vw] block">
                    <Image src={'/Carousel/6-01.jpg'} fill alt="slide1"></Image>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="image h-[15vh] md:h-[30vh] lg:h-[40vh] w-[100vw] block">
                    <Image src={'/Carousel/4.jpg'} fill alt="slide2"></Image>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel