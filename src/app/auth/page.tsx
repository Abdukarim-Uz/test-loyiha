"use client"
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { SubmitEvent } from 'react';
import Cookies from 'js-cookie'

const AdminPage: React.FC = () => {
    const router = useRouter()
    const hanlderSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget)
        const dataObj = Object.fromEntries(form.entries())

        if (dataObj.email === "abdukarimt463@gmail.com" && dataObj.password === "1234567890") {
            Cookies.set('token', 'acwvtrgecsveakcewnrgcqiwogtqouygtoqwygoserkutgqiwuygrquiedr9qyewg8', { expires: 3 })
            router.push("/admin")
        } else {
            router.push('/home')
        }

    }

    return (
        // Asosiy konteyner: to'liq ekran balandligi, fon rasmi va markazlashtirish.
        <div className="min-h-screen flex items-center justify-center bg-[#111827] bg-[url('https://tailwindui.com/img/beams-cover@95.jpg')] bg-cover bg-center px-4 py-12 sm:px-6 lg:px-8 font-sans">

            {/* Oynasimon effektga (glassmorphism) ega karta */}
            <div className="w-full max-w-md space-y-8 bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">

                {/* Sarlavha qismi */}
                <div className="text-center">
                    {/* Admin belgisi (icon) */}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/20 shadow-lg shadow-indigo-500/10 mb-6">
                        <svg className="h-9 w-9 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Salom <span className="text-indigo-400">Admin!</span>
                    </h1>
                    <p className="mt-3 text-lg text-gray-400">
                        Tizimga kirish uchun ma'lumotlaringizni kiriting.
                    </p>
                </div>

                {/* Kirish formasi */}
                <form onSubmit={hanlderSubmit} className="mt-10 space-y-6" >
                    <input type="hidden" name="remember" defaultValue="true" />

                    <div className="space-y-5 rounded-md shadow-sm">
                        {/* Email input guruhi */}
                        <div>
                            <label htmlFor="email-address" className="text-sm font-medium text-gray-300 block mb-1.5">
                                Elektron pochta manzili
                            </label>
                            <div className="relative">
                                {/* Input ichidagi ikonka */}
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                    <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.161V6a2 2 0 0 0-2-2H3Z" />
                                        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                                    </svg>
                                </div>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:text-sm transition duration-200 ease-in-out hover:border-white/20"
                                    placeholder="admin@misol.uz"
                                />
                            </div>
                        </div>

                        {/* Parol input guruhi */}
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-300 block mb-1.5">
                                Parol
                            </label>
                            <div className="relative">
                                {/* Input ichidagi ikonka */}
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                    <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:text-sm transition duration-200 ease-in-out hover:border-white/20"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Eslab qolish va Parolni tiklash */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-500/20 focus:ring-offset-0 focus:ring-2 transition duration-150"
                            />
                            <label htmlFor="remember-me" className="ml-2.5 block text-sm text-gray-400">
                                Meni eslab qol
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link href="#" className="font-medium text-indigo-400 hover:text-indigo-300 transition duration-150">
                                Parolni unutdingizmi?
                            </Link>
                        </div>
                    </div>

                    {/* Kirish tugmasi */}
                    <div>
                        <button
                            className="group relative flex w-full justify-center rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-200 active:scale-[0.98]"
                        >
                            Tizimga kirish
                            {/* Tugma ustiga kelganda paydo bo'ladigan o'ngga strelka animatsiyasi */}
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200">
                                <svg className="h-5 w-5 text-indigo-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>

                {/* Pastki qismdagi yozuv */}
                <p className="mt-8 text-center text-xs text-gray-600">
                    © 2024 Kompaniya Nomi. Barcha huquqlar himoyalangan.
                </p>
            </div>
        </div>
    );
};

export default AdminPage;