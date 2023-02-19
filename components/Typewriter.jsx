"use client";
import { Typewriter } from "react-simple-typewriter";
export default function Textwriter() {
  return (
    <div>
      <h2 className="md:mt-6 mt-3 text-gray-600 font-medium text-sm md:text-2xl">
        <Typewriter
          words={[
            `Assalamualaikum, Halo...`,
            `Al-Quran adalah Jawaban`,
            `Petunjuk`,
            `Obat`,
            `Rahmat`,
            `Dan masih banyak kebaikan lainnya`,
            `Yuk baca Al-Quran`,
          ]}
          cursor
          loop={true}
        />
      </h2>
    </div>
  );
}
