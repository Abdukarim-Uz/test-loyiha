import { SwiperSlide } from "swiper/react"
import { motion } from 'framer-motion';
import Link from "next/link";

function MoviesMap({ movie, index }: { movie: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative cursor-pointer"
        >
            <Link href={`/detailPage/${movie.id}`} >
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
            </Link>
        </motion.div>
    )
}

export default MoviesMap