"use client";

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Navbar from '@/src/features/navbar/Navbar';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Navigation } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/store/store';
import MoviesMap from '@/src/features/maps/moviesMap/MoviesMap';
import HeroMap from '@/src/features/maps/heroMap/HeroMap';
export default function Home() {


    const HERO_MOVIES: any = useSelector((state: RootState) => state.HERO_MOVIES.value)

    const MOVIES: any = useSelector((state: RootState) => state.MOVIES.value)

    return (
        <div className="min-h-screen bg-[#0f1115] text-white overflow-hidden">
            <Navbar />

            {/* HERO SECTION WITH SWIPER */}
            <section className="relative h-[90vh] w-full">
                <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    speed={1000}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="h-full w-full"
                >
                    {HERO_MOVIES?.map((item: {
                        id: number,
                        title: string,
                        subtitle: string,
                        desc: string,
                        image: string
                    }) => (
                        <SwiperSlide key={item.id} className="relative w-full h-full">
                            <HeroMap  item={item} />                         
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="relative z-20 px-6 lg:px-16 pb-12 mt-10">
                {/* Sarlavha qismi */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                        <span className="w-1.5 h-8 bg-red-600 rounded-full inline-block shadow-[0_0_10px_#dc2626]" />
                        title
                    </h2>
                    <button className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                        Barchasini ko'rish
                    </button>
                </div>

                {/* Swiper Karusel */}
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    freeMode={true}
                    spaceBetween={20}
                    slidesPerView={2.2} // Mobil qurilmalar uchun
                    breakpoints={{
                        640: { slidesPerView: 3.2 },
                        1024: { slidesPerView: 4.2 },
                        1280: { slidesPerView: 5.2 }, // Desktop uchun
                    }}
                    className="movie-swiper !overflow-visible"
                >
                    {MOVIES?.map((movie: { id: number, title: string, image: string, rating: string, year: string }, index: number) => (
                        <SwiperSlide key={movie.id} >
                            <MoviesMap movie={movie} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="relative z-20 -mt-16 px-6 lg:px-16 pb-20">
                {/* Filmlar gridi kodi shu yerda davom etadi... */}
            </section>
        </div>
    );
}