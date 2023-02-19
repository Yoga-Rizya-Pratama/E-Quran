"use client";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Tafsir({ ayat, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <div className="flex justify-end" onClick={() => setIsOpen(!isOpen)}>
        <button className="font-mynerver md:text-xs text-[10px] bg-slate-800 p-2 rounded-lg cursor-pointer hover:bg-slate-600 duration-300">
          {isOpen ? "Tutup" : "Baca Tafsir"}
        </button>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} mt-3`}>
        <p className="font-poppins md:text-xs text-[10px] md:leading-10 text-justify">
          {isOpen && <Typewriter words={[text]} cursor />}
        </p>
      </div>
    </div>
  );
}
