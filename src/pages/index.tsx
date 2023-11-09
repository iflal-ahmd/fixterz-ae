
import Layout from "@/sections/Layout";
import { FingerPrintIcon} from "@heroicons/react/24/solid";
import {Process} from "@/components/Process/";
import { SERVICES} from "@/data";
import Services from "../components/Service/Services";
import SectionHeader from "@/components/SectionHeader";
import SectionTitle from "@/components/SectionTitle";
import Hex from "@/components/Header/Hex";
import Image from 'next/image'
import {EffectCube, Navigation, Pagination, Autoplay} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/effect-cube';
export default function Home() {
  return (

        <Layout>
            <>
                <section className='bg-ikeaLightBlue py-10 pt-3 sm:py-24 px-4 sm:px-10 flex flex-col dark:bg-gray-900'>
                    <div className="grid grid-cols-1 gap-4 max-w-screen-2xl mb-8">
                        <div>
                            <Swiper
                                modules={[EffectCube, Navigation, Pagination, Autoplay]}
                                effect={'cube'}
                                navigation
                                autoplay={true}
                                spaceBetween={0}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <Image width={1500} height={800}
                                           src={'https://res.cloudinary.com/dedmunna/image/upload/v1679916988/fixterz/main-slider/4.jpg'}
                                           alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image width={1500} height={800}
                                           src={'https://res.cloudinary.com/dedmunna/image/upload/v1679916988/fixterz/main-slider/3.jpg'}
                                           alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image width={1500} height={800}
                                           src={'https://res.cloudinary.com/dedmunna/image/upload/v1679916988/fixterz/main-slider/2.jpg'}
                                           alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image width={1500} height={800}
                                           src={'https://res.cloudinary.com/dedmunna/image/upload/v1679916988/fixterz/main-slider/5.jpg'}
                                           alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image width={1500} height={800}
                                           src={'https://res.cloudinary.com/dedmunna/image/upload/v1679916988/fixterz/main-slider/6.jpg'}
                                           alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image width={1500} height={800}
                                           src={'https://res.cloudinary.com/dedmunna/image/upload/v1679916988/fixterz/main-slider/7.jpg'}
                                           alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <FingerPrintIcon className='h-4 w-4 text-ikeaBlue'/>
                        <span className='text-[24px]'>
                            <span className='text-ikeaBlue'>Highly trained Handyman Services</span>
                        </span>
                    </div>
                    <h4 className='text-3xl md:text-[5rem] leading-[1.1]  md:font-black mt-5 font-bold'>
                        <span className='text-gray-800 dark:text-slate-50'>Ready To </span>
                        <span className='text-ikeaBlue'>Help </span>
                        <span className='ext-gray-800 dark:text-slate-50'>You.</span>
                    </h4>
                    <h3 className='mb-10 mt-2 text-gray-800 dark:text-slate-400 text-sm md:text-[16px]'>
                        We provide best handyman services for you & your company.
                    </h3>
                    <div>
                        <a rel='noreferrer' target='_blank' href='https://wa.me/971553212106' className='inline bg-ikeaYellow font-[600] up text-gray-900 px-6 py-3 block rounded-xl shadow-xl'>
                            Book online
                        </a>
                    </div>
                </section>
                <section className='bg-white dark:bg-slate-800 py-20'>
                    <Hex/>
                </section>
                <section className='bg-ikeaLightBlue dark:bg-gray-900 py-10 pb-8'>
                    <Process/>
                </section>
                <section className='py-12 bg-white dark:bg-slate-800 px-4' id='services'>
                    <SectionTitle title='Services'/>
                    <SectionHeader title='We offer the best services'/>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4">
                        <Services services={SERVICES}/>
                    </div>
                </section>
                <section className='bg-ikeaLightBlue dark:bg-slate-900 px-4 py-16 pb-12 grid grid-cols-5 gap-4 sm:gap-10' id='about'>
                    <div className='sm:col-span-2 col-span-5'>
                        <Image width={600} height={616} alt='About image' src='/about-img-2.jpg'/>
                    </div>
                    <div className='sm:col-span-3 col-span-5 flex flex-col justify-between'>
                        <div>
                            <SectionTitle title='About us'/>
                            <SectionHeader title='Over 15+ Years of Experience.'/>
                            <div className='text-slate-800 dark:text-slate-500'>
                                <p className='text-sm'>
                                    We have years of experience and a solid reputation so you can rest assured that you,
                                    your home and your furniture are in safe, reliable hands. so we can fix/assemble your
                                    home/furniture quickly and correctly.
                                </p>
                            </div>
                        </div>
                        <div className='mt-8 sm:mb-5'>
                            <a rel='noreferrer' target='_blank' href='https://wa.me/971553212106' className='inline bg-ikeaYellow font-[600] up text-gray-900 px-6 py-3 block rounded-xl shadow-xl'>
                                Book online
                            </a>
                        </div>
                    </div>
                </section>

            </>
        </Layout>
  )
}
