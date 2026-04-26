"use client";
import Link from 'next/link';
import { useState } from 'react';
import Filmlar from './components/filmlar/Filmlar';
import Main from './components/main/Main';
import Foydalanuvchilar from './components/foydalanuvchilar/Foydalanuvchilar';

const AdminDashboard = () => {
  const [show, setShow] = useState<number>(0)
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex font-sans">

      {/* 1. SIDEBAR */}
      <aside className="w-64 border-r border-zinc-800 p-6 flex flex-col hidden lg:flex">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold">K</div>
          <span className="text-xl font-bold tracking-tight">KinoAdmin</span>
        </div>

        <nav className="space-y-2 flex-1">
          {['Dashboard', 'Filmlar', 'Foydalanuvchilar'].map((item, idx) => (
            <Link onClick={() => setShow(idx)} key={idx} href="#" className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition ${idx === show ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'}`}>
              {item}
            </Link>
          ))}
        </nav>
      </aside>

      {/* 2. MAIN CONTENT */}

      {show === 0 ? (
        <Main />
      ) : show === 1 ? (
        <Filmlar />
      ) : show === 2 ? (
        <Foydalanuvchilar />
      ) : null}
    </div >
  );
};

export default AdminDashboard;