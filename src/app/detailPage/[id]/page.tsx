"use client";

import { useState } from "react";
import {
    Play,
    Star,
    Clock,
    Calendar,
    ChevronRight,
    Info,
    Share2,
    Bookmark,
    ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { useParams, useRouter } from "next/navigation";
import VideoPlayer from "../player/player/VideoPlayer";
import { toast } from "sonner";


export default function MovieDetailPage() {
    const params = useParams()
    const router = useRouter()
    const id = params?.id;
    const [play, setPlay] = useState<boolean>(false)

    const movies: any = useSelector((state: RootState) => state.MOVIES.value)

    const hero: any = useSelector((state: RootState) => state.HERO_MOVIES.value)

    const findItem = movies?.find((item: any) => String(item.id) === String(id)) ? movies?.find((item: any) => String(item.id) === String(id)) : hero?.find((item: any) => String(item.id) === String(id))
    if (!findItem) {
        return <div className="text-white text-center mt-20">Film topilmadi</div>
    }

    console.log(play)
    return (
        // 'dark' klassi bu yerni har doim qora rejimda tutadi
        <div className="dark min-h-screen bg-[#09090b] text-zinc-50 pb-20 selection:bg-primary/30">
            {
                play ?
                    <VideoPlayer setPlay={setPlay} />
                    :
                    <>
                        <div className="absolute z-50 top-20 left-20 boed " >
                            <Button onClick={() => {
                                router.back()
                            }} className="rounded-sm fill-white cursor-pointer " ><ArrowLeft fill="white" className="fill-white" /></Button>
                        </div>
                        {/* Hero Section */}
                        <div className="relative h-[85vh] w-full overflow-hidden">
                            {/* Background Image with Zoom Effect */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
                                style={{ backgroundImage: `url(${findItem?.image})` }}
                            />

                            {/* Gradients to blend image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-transparent to-transparent" />

                            {/* Hero Content */}
                            <div className="absolute bottom-0 left-0 p-6 md:p-16 w-full max-w-5xl space-y-8">

                                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
                                    {findItem?.title}
                                </h1>

                                <div className="flex items-center gap-8 text-sm md:text-base font-medium text-zinc-400">
                                    <div className="flex items-center gap-2">
                                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                        <span className="text-white font-bold">{findItem?.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5" />
                                        <span>{findItem?.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        <span>{findItem?.year}</span>
                                    </div>
                                </div>

                                <p className="text-lg text-zinc-300 max-w-2xl leading-relaxed font-light">
                                    {findItem?.description}
                                </p>

                                <div className="flex flex-wrap gap-4 items-center">
                                    <Button onClick={() => setPlay(true)} size="lg" className="h-14 px-10 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all font-bold text-lg">
                                        <Play className="w-6 h-6 mr-2 fill-current" /> Ko'rish
                                    </Button>
                                    <Button onClick={() => toast("ro'yxatga qo'shildi")} size="lg" variant="outline" className="h-14 px-6 rounded-xl border-zinc-700 bg-white/5 backdrop-blur-md hover:bg-white/10">
                                        <Bookmark className="w-5 h-5 mr-2" /> Ro'yxatga saqlash
                                    </Button>
                                    <Button size="icon" variant="outline" className="h-14 w-14 rounded-xl border-zinc-700 hover:bg-white/10">
                                        <Share2 className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="max-w-7xl mx-auto px-6 md:px-16 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">

                            {/* Left Column: Cast & Details */}
                            <div className="lg:col-span-8 space-y-12">
                                <section className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800">
                                    <h3 className="text-xl font-bold mb-4">Sujet haqida</h3>
                                    <p className="text-zinc-400 leading-[1.8]">
                                        {findItem?.description}
                                    </p>
                                </section>

                            </div>

                            {/* Right Column: Metadata Sidebar */}
                            <div className="lg:col-span-4 space-y-6">
                                <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-[2rem] p-8 shadow-2xl">
                                    <h3 className="text-lg font-bold flex items-center gap-2 mb-6">
                                        <Info className="w-5 h-5 text-zinc-400" /> Batafsil ma'lumot
                                    </h3>

                                    <div className="space-y-5">
                                        <DetailRow label="Studio" value={findItem?.studio} />
                                        <DetailRow label="Davlat" value={findItem?.davlati} />
                                        <DetailRow label="Til" value={findItem?.til} />
                                        <DetailRow label="Yosh chegarasi" value={findItem?.yoshChegarasi} />
                                        <DetailRow label="Sifat" value={findItem?.sifati} isBadge />
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-zinc-800">
                                        <div className="flex items-center gap-4">
                                            <div className="flex -space-x-3">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                                                        U{i}
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-xs text-zinc-400">Hozirda 1.2k foydalanuvchi ko'rmoqda</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }



        </div>
    );
}

// Yordamchi komponent
function DetailRow({ label, value, isBadge = false }: { label: string, value: string, isBadge?: boolean }) {
    return (
        <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500">{label}</span>
            {isBadge ? (
                <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 border-none">{value}</Badge>
            ) : (
                <span className="font-semibold text-zinc-200">{value}</span>
            )}
        </div>
    );
}