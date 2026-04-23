"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Navbar from '@/src/features/navbar/Navbar';

// Swiper stillarini import qilish
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Navigation } from 'lucide-react';

const HERO_MOVIES = [
    {
        id: 1,
        title: 'YULDUZLAR JANGI',
        subtitle: 'YANGILIK',
        desc: 'Olis galaktikadagi epik sarguzashtlar davom etadi. Kuch siz bilan bo\'lsin.',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2050&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'INCEPTION',
        subtitle: 'TREND',
        desc: 'Sizning ongingiz - eng xavfli jinoyat joyi. Tush ichidagi tushga xush kelibsiz.',
        image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'INTERSTELLAR',
        subtitle: 'MUST WATCH',
        desc: 'Insoniyatning oxiri bizning boshlanishimiz bo\'ladi. Koinot qa\'riga sayohat.',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop'
    }
];

const MOVIES = [

    { id: 1, title: 'Inception', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', rating: '8.8', year: '2010' },

    { id: 2, title: 'Interstellar', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop', rating: '8.7', year: '2014' },

    { id: 3, title: 'The Dark Knight', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop', rating: '9.0', year: '2008' },

    { id: 4, title: 'Dune', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop', rating: '8.0', year: '2021' },

    { id: 5, title: 'Oppenheimer', image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2113&auto=format&fit=crop', rating: '8.4', year: '2023' },

];



export default function Home() {
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
                    {HERO_MOVIES.map((item) => (
                        <SwiperSlide key={item.id} className="relative w-full h-full">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlays for depth */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115] via-[#0f1115]/60 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex items-center px-6 lg:px-16">
                                <div className="max-w-2xl">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="px-3 py-1 bg-red-600 text-xs font-bold uppercase rounded-sm mb-4 inline-block"
                                    >
                                        {item.subtitle}
                                    </motion.span>

                                    <motion.h1
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-5xl md:text-8xl font-black mb-4 tracking-tighter leading-none"
                                    >
                                        {item.title}
                                    </motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg"
                                    >
                                        {item.desc}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="flex gap-4"
                                    >
                                        <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 active:scale-95 flex items-center gap-2">
                                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M8 5v14l11-7z" /></svg>
                                            Tomosha qilish
                                        </button>
                                        <button className="px-8 py-3 bg-gray-500/20 backdrop-blur-md border border-white/10 text-white font-bold rounded-full hover:bg-white/20 transition active:scale-95">
                                            Batafsil
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
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
                    {MOVIES.map((movie, index) => (
                        <SwiperSlide key={movie.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="group relative cursor-pointer"
                            >
                                <div className="aspect-[2/3] overflow-hidden rounded-2xl border border-white/5 bg-gray-900 shadow-2xl relative">
                                    <img
                                        src={movie.image}
                                        alt={movie.title}
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-40"
                                    />

                                    {/* Hover bo'lgandagi ma'lumotlar */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                        <h3 className="font-bold text-lg leading-tight">{movie.title}</h3>

                                        <div className="flex items-center justify-between text-xs text-gray-300 mt-2">
                                            <span className="bg-white/10 px-2 py-0.5 rounded text-white">{movie.year}</span>
                                            <span className="flex items-center gap-1 text-yellow-500 font-bold">
                                                ★ {movie.rating}
                                            </span>
                                        </div>

                                        <button className="mt-4 w-full py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-red-600/20">
                                            Tomosha qilish
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
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