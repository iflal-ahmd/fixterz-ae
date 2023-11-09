import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {CarouselData} from "@/@types";
import { EffectFade } from 'swiper';
import Image from 'next/image'

export default function Carousel({images}:CarouselData){
    return (
        <Swiper
            modules={[EffectFade]} effect="fade"
            autoplay={true}
            spaceBetween={0}
            slidesPerView={1}
        >
            {images.map((image: string, i) => (<SwiperSlide key={i + 'im'}>
                <Image width={310} height={619} className=''
                    src={image}
                    alt=""
                />
            </SwiperSlide>) )}
        </Swiper>
    )
}
