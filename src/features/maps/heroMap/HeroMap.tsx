import { motion } from 'framer-motion';
import Link from 'next/link';


function HeroMap({ item }: { item: any }) {
    return (
        <>


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
                        <Link href={`/detailPage/${item.id}`} >
                            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 active:scale-95 flex items-center gap-2">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M8 5v14l11-7z" /></svg>
                                Tomosha qilish
                            </button>
                        </Link>
                        <button className="px-8 py-3 bg-gray-500/20 backdrop-blur-md border border-white/10 text-white font-bold rounded-full hover:bg-white/20 transition active:scale-95">
                            Batafsil
                        </button>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default HeroMap