"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Namuna statistikalar
const STATS = [
  { id: 1, label: 'Jami foydalanuvchilar', value: '24,512', change: '+12%', icon: '👥' },
  { id: 2, label: 'Ko\'rilgan soatlar', value: '128.4k', change: '+8%', icon: '🕒' },
  { id: 3, label: 'Obunachilar', value: '3,105', change: '+18%', icon: '💎' },
  { id: 4, label: 'Daromad', value: '$12,400', change: '+5%', icon: '💰' },
];

// Oxirgi qo'shilgan filmlar
const RECENT_MOVIES = [
  { id: 1, title: 'Dune: Part Two', category: 'Fantastika', status: 'Active', date: '2024-03-20' },
  { id: 2, title: 'Oppenheimer', category: 'Drama', status: 'Active', date: '2024-03-18' },
  { id: 3, title: 'Poor Things', category: 'Komediya', status: 'Draft', date: '2024-03-15' },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex font-sans">
      
      {/* 1. SIDEBAR */}
      <aside className="w-64 border-r border-zinc-800 p-6 flex flex-col hidden lg:flex">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold">K</div>
          <span className="text-xl font-bold tracking-tight">KinoAdmin</span>
        </div>
        
        <nav className="space-y-2 flex-1">
          {['Dashboard', 'Filmlar', 'Foydalanuvchilar', 'Sozlamalar'].map((item, idx) => (
            <a key={idx} href="#" className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition ${idx === 0 ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'}`}>
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* 2. MAIN CONTENT */}
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

        {/* 3. STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {STATS.map((stat, idx) => (
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

        {/* 4. RECENT MOVIES TABLE */}
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
              {RECENT_MOVIES.map((movie) => (
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
    </div>
  );
};

export default AdminDashboard;