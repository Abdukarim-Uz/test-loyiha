"use client";

import { Dispatch, SetStateAction } from 'react';

import {
    Dialog,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button'; // Shadcn UI Button
import { ArrowLeft } from 'lucide-react';

// Agar FieldGroup va Field maxsus komponentlar bo'lsa, ularni ham import qiling. 
// Aks holda oddiy div ishlatishingiz mumkin.
export default function VideoPlayer({ setPlay }: { setPlay: Dispatch<SetStateAction<boolean>> }) {

    return (
        <div className="flex h-300 flex-col gap-6 p-4">
            <Dialog>
                <DialogTrigger asChild>
                    <Button onClick={() => setPlay(false)} variant="outline" className="w-fit"><ArrowLeft fill="white" className="fill-white" /></Button>
                </DialogTrigger>
            </Dialog>
            {/* Video Player Qismi */}
            <iframe width="900" height="797" className='mx-auto mt-10 rounded-[20px] hover:-translate-y-1 duration-300 hover:scale-105 ' src="https://www.youtube.com/embed/4dr-k4NGp90" title="Honor 600 Lite - obzor (O’zbek tilida) " frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            {/* Dialog Qismi */}
        </div>
    );
}