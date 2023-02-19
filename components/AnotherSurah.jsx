"use client";

import Link from "next/link";
import { FcNext, FcPrevious } from "react-icons/fc";

export default function AnotherSurah({ prev, next }) {
  return (
    <div className="flex items-center justify-between">
      <Link href={`detail/${prev?.nomor}`}>
        <div className="flex items-center gap-3 group">
          {prev && (
            <FcPrevious className="group-hover:w-10 h-10 duration-300" />
          )}
          <h3 className="text-xs md:text-lg">{prev && prev.namaLatin}</h3>
        </div>
      </Link>
      <Link href={`detail/${next?.nomor}`}>
        <div className="flex items-center gap-3 group">
          <h3 className="text-xs md:text-lg">{next && next.namaLatin}</h3>
          {next && <FcNext className="group-hover:w-10 h-10 duration-300" />}
        </div>
      </Link>
    </div>
  );
}
