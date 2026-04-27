"use client";
import { hydrateHero } from "@/src/store/features/heroSlice/HeroSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ClientInit() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hydrateHero());
    }, [dispatch]);
    return null; // Hech narsa render qilmaydi, faqat kodni bajaradi
}
  
  