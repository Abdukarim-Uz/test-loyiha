"use client"
import { motion } from 'framer-motion';
import { RootState } from "@/src/store/store";
import { useSelector } from "react-redux";

function Main() {

    const STATS: any = useSelector((state: RootState) => state.STATS.value);

    const RECENT_MOVIES: any = useSelector((state: RootState) => state.recent_moviesSlice.value)


    return (
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
            {/* Header */}
            <header className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-2xl font-bold italic">Dashboard</h1>
                    <p className="text-zinc-500 text-sm">Xush kelibsiz, loyihangiz holati bilan tanishing.</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 bg-zinc-900 border border-zinc-800 rounded-full">🔔</button>
                    <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full border-2 border-zinc-800" />
                </div>
            </header>

            {/* STATS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {STATS?.map((stat: any, idx: number) => (
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl backdrop-blur-sm"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-2xl">{stat.icon}</span>
                            <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">{stat.change}</span>
                        </div>
                        <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                        <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                    </motion.div>
                ))}
            </div>

            {/* RECENT MOVIES TABLE */}
            <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
                    <h2 className="font-bold">Oxirgi qo'shilgan filmlar</h2>
                    <button className="text-xs text-indigo-400 font-semibold hover:underline">Hammasini ko'rish</button>
                </div>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-zinc-500 text-xs uppercase border-b border-zinc-800/50">
                            <th className="p-4 font-semibold">Film nomi</th>
                            <th className="p-4 font-semibold">Kategoriya</th>
                            <th className="p-4 font-semibold">Sana</th>
                            <th className="p-4 font-semibold">Holat</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {RECENT_MOVIES?.map((movie: any) => (
                            <tr key={movie.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/20 transition cursor-default">
                                <td className="p-4 font-medium">{movie.title}</td>
                                <td className="p-4 text-zinc-400">{movie.category}</td>
                                <td className="p-4 text-zinc-400">{movie.date}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${movie.status === 'Active' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-zinc-700/30 text-zinc-500'}`}>
                                        {movie.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default Main