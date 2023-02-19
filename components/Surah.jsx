"use client";
import { motion } from "framer-motion";

export default function Surah({
  nomor,
  tempatTurun,
  jumlahAyat,
  nama,
  namaLatin,
}) {
  return (
    <motion.div
      initial={{
        x: 50,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="flex gap-6 cursor-pointer items-center md:border md:px-3 md:py-6 md:rounded-lg">
        <div className="border w-8 h-6 rounded-full flex items-center justify-center border-[#9B46F2]">
          <span className="text-xs md:text-md text-center">{nomor}</span>
        </div>
        <div className="flex w-full justify-between items-center">
          <div>
            <h3 className="text-sm md:text-lg mb-2">{namaLatin}</h3>
            <h3 className="text-gray-600 text-xs md:text-md">
              {tempatTurun} - {jumlahAyat} ayat
            </h3>
          </div>
          <h3 className="text-right text-[#9B46F2] font-arabic md:text-2xl">
            {nama}
          </h3>
        </div>
      </div>
      <hr className="md:hidden my-3 h-[1px]" />
    </motion.div>
  );
}
