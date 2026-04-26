"use client";

import React, { SubmitEvent } from 'react';
import { useLocalStorage } from 'usehooks-ts'
import { PlusCircle, Upload, Save } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'; // Textarea uchun ham Shadcn ishlatsa bo'ladi
import { nanoid } from 'nanoid';
import { toast } from 'sonner';


const Filmlar = () => {

    const [movies, setMovies] = useLocalStorage<any[]>('movies', [])
    const [hero, setHero] = useLocalStorage<any[]>('hero', [])
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const formdata = Object.fromEntries(form.entries());

        console.log("Form ma'lumotlari:", formdata);

        const type = formdata.type;
        if (type === "kinolar") {
            const kinolarObj = [...(movies ?? []), {
                id: nanoid(5),
                title: formdata.title,
                image: formdata.image,
                rating: formdata.rating,
                time: formdata.time,
                year: formdata.year,
                description: formdata.desc,
                studio: formdata.studio,
                davlati: formdata.davlati,
                til: formdata.til,
                yoshChegarasi: formdata.yosh_chegarasi,
                sifati: formdata.sifati
            }]
            setMovies(kinolarObj)
            toast("yangi kino qo'shildi", {
                description: "bugun",
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo")
                },
                position: "top-center",
                
            })
            return;
        }
        const kinolarObj = [... (hero ?? []),
        {
            id: nanoid(5),
            title: formdata.title,
            desc: formdata.desc,
            image: formdata.image,
            studio: formdata.studio,
            davlati: formdata.davlati,
            til: formdata.til,
            description: formdata.desc,
            yoshChegarasi: formdata.yosh_chegarasi,
            sifati: formdata.sifati
        }
        ]

        setHero(kinolarObj)
        toast("yangi kino qo'shildi", {
            description: "bugun",
            action: {
                label: "Undo",
                onClick: () => console.log("Undo")
            },
            position: "top-center",

        })
        return


    };

    return (
        <div className="p-6 lg:p-10 bg-[#09090b] min-h-screen text-zinc-100">
            <div className="max-w-4xl mx-auto flex flex-col gap-10">

                <div className="flex items-center justify-center gap-3 mb-2">
                    <PlusCircle className="text-indigo-500 w-8 h-8" />
                    <h1 className="text-3xl font-bold tracking-tight text-white italic">Yangi film qo'shish</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl backdrop-blur-sm">

                    {/* 1-qator: Nomi va Janr */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-400">Film nomi</label>
                            <Input
                                required
                                name="title"
                                placeholder="Masalan: Interstellar"
                                className="bg-zinc-950 border-zinc-800 h-12 rounded-xl focus-visible:ring-indigo-600 focus-visible:ring-2"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-400">Janr</label>
                            <Select name='janr' required>
                                <SelectTrigger className="w-full bg-zinc-950 border-zinc-800 rounded-xl h-12 focus:ring-indigo-600">
                                    <SelectValue placeholder="Janrni tanlang" />
                                </SelectTrigger>
                                <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-100">
                                    <SelectGroup>
                                        <SelectLabel>Janrlar</SelectLabel>
                                        <SelectItem value="Action">Action</SelectItem>
                                        <SelectItem value="Drama">Drama</SelectItem>
                                        <SelectItem value="Sci-Fi">Sci-Fi</SelectItem>
                                        <SelectItem value="Horror">Horror</SelectItem>
                                        <SelectItem value="Comedy">Comedy</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* 2-qator: Yili va Davomiyligi */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-400">Chiqarilgan yili</label>
                            <Input
                                required
                                type="number"
                                name='year'
                                min={1945}
                                placeholder="2024"
                                className="bg-zinc-950 border-zinc-800 h-12 rounded-xl focus-visible:ring-indigo-600"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-400">Davomiyligi (minut)</label>
                            <Input
                                required
                                type="text"
                                name='time'
                                placeholder="148 min"
                                className="bg-zinc-950 border-zinc-800 h-12 rounded-xl focus-visible:ring-indigo-600"
                            />
                        </div>
                    </div>
                    {/* 3 - chi qator  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-400">studio</label>
                            <Input
                                required
                                type="text"
                                name='studio'
                                placeholder="paramount, pictures"
                                className="bg-zinc-950 border-zinc-800 h-12 rounded-xl focus-visible:ring-indigo-600"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-400">Davlati</label>
                            <Input
                                required
                                type="text"
                                name='davlati'
                                placeholder="AQSH"
                                className="bg-zinc-950 border-zinc-800 h-12 rounded-xl focus-visible:ring-indigo-600"
                            />
                        </div>
                    </div>
                    {/* 4 - chi qator  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-400">til</label>
                            <Input
                                required
                                type="text"
                                name='til'
                                placeholder="ingliz tili, rus tili, o'zbek tili"
                                className="bg-zinc-950 border-zinc-800 h-12 rounded-xl focus-visible:ring-indigo-600"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-400">yosh chegarasi</label>
                            <Select name='yosh_chegarasi' required>
                                <SelectTrigger className="w-full bg-zinc-950 rounded-sm border-zinc-800 rounded-xl h-12 focus:ring-indigo-600">
                                    <SelectValue placeholder="Film turini tanlang" />
                                </SelectTrigger>
                                <SelectContent className="bg-zinc-900 rounded-sm border-zinc-800 text-zinc-100">
                                    <SelectGroup>
                                        <SelectItem value="6+">6+</SelectItem>
                                        <SelectItem value="12+">12+</SelectItem>
                                        <SelectItem value="16+">16+</SelectItem>
                                        <SelectItem value="18+">18+</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className='w-30' >
                            <label className="text-sm font-semibold text-zinc-400">reyting</label>
                            <Input required className='rounded-sm bg-zinc-950 focus-visible:ring-indigo-600 border-zinc-800 ' name='rating' placeholder='4.5' />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-400">video sifati</label>
                            <Select name='sifati' required>
                                <SelectTrigger className="w-full bg-zinc-950 rounded-sm border-zinc-800 rounded-xl h-12 focus:ring-indigo-600">
                                    <SelectValue placeholder="sifat turini tanlang" />
                                </SelectTrigger>
                                <SelectContent className="bg-zinc-900 rounded-sm border-zinc-800 text-zinc-100">
                                    <SelectGroup>
                                        <SelectItem value="360p">360p</SelectItem>
                                        <SelectItem value="480p">480p</SelectItem>
                                        <SelectItem value="720p">720p</SelectItem>
                                        <SelectItem value="1080p">1080p</SelectItem>
                                        <SelectItem value="4k">4k</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Tavsif */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-400">Film haqida qisqacha</label>
                        <Textarea
                            required
                            name='desc'
                            rows={4}
                            placeholder="Film syujeti haqida yozing..."
                            className="bg-zinc-950 border-zinc-800 rounded-xl focus-visible:ring-indigo-600 resize-none p-4"
                        />
                    </div>

                    {/* Film turi */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-400">Ko'rsatish turi</label>
                        <Select name='type' required>
                            <SelectTrigger className="w-full bg-zinc-950 border-zinc-800 rounded-xl h-12 focus:ring-indigo-600">
                                <SelectValue placeholder="Film turini tanlang" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-100">
                                <SelectGroup>
                                    <SelectLabel>Joylashuv</SelectLabel>
                                    <SelectItem value="hero">Hero (Asosiy banner)</SelectItem>
                                    <SelectItem value="kinolar">Oddiy ro'yxat</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Poster URL */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-400">Poster URL</label>
                        <div className="flex gap-4">
                            <Input
                                required
                                type="text"
                                name='image'
                                placeholder="https://images.unsplash.com/..."
                                className="bg-zinc-950 border-zinc-800 h-12 rounded-xl focus-visible:ring-indigo-600"
                            />
                            <button type="button" className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition text-zinc-300 h-12 w-12 flex items-center justify-center">
                                <Upload size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Saqlash tugmasi */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                        >
                            <Save size={20} />
                            Ma'lumotlarni saqlash
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Filmlar;