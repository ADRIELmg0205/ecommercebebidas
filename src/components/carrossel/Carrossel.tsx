import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import React, { useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

register()

const data = [
    { id: '1', image: 'https://i.postimg.cc/C5SDKndY/4.png' },
    { id: '2', image: 'https://i.postimg.cc/rm6xvPkD/3.png' },
    { id: '3', image: 'https://i.postimg.cc/PxmYhQX2/Design-sem-nome-1.png' },
    { id: '4', image: 'https://i.postimg.cc/BvP27GdW/2.png' },
]

export default function Carrossel() {
    return (
        <div className=''>
            <Swiper
                modules={[EffectFade]}
                effect={'fade'}
                loop={true}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
            >

                {data.map((item) => (
                    <SwiperSlide className='px-10' key={item.id}>
                        <div className="">
                            <img
                                src={item.image}
                                alt='Slider'
                                className='w-[1980px] h-[400px] object-contain'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}