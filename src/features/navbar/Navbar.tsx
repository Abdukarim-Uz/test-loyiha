"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Skroll holatini kuzatish (fonni o'zgartirish uchun)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Bosh sahifa', href: 'home' },
        { name: 'admin', href: 'admin' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 lg:px-16 py-4 ${isScrolled ? 'bg-[#0f1115]/90 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent'
                }`}
        >
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                            <svg fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white">UZ<span className="text-red-600">KINO</span></span>
                    </motion.div>

                    {/* Desktop Links */}
                    <ul className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={`/${link.href}`}
                                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side Tools */}
                <div className="flex items-center gap-5">
                    <button className="hidden sm:block text-gray-300 hover:text-white p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>

                    {/* <button className="px-6 py-2 bg-red-600 text-white text-sm font-bold rounded-full hover:bg-red-700 transition active:scale-95 shadow-lg shadow-red-600/20">
                        Kirish
                    </button> */}

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-screen w-[75%] bg-[#0f1115] p-8 z-[110] border-l border-white/10"
                        >
                            <ul className="flex flex-col gap-6 mt-12">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-xl font-bold text-white hover:text-red-600 transition">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;