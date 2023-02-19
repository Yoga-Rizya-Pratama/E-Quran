"use client";
import Text from "./Text";
import QuranImage from "../public/quran_image.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <div className="py-3">
      <div className="relative flex items-center justify-between">
        <motion.div
          initial={{
            x: -50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{
            once: true,
          }}
        >
          <Link href="/">
            <Text
              title={"Quran"}
              cls={
                "text-white text-2xl md:text-7xl font-semibold hover:text-[#BB75FD] duration-300"
              }
            />
          </Link>
        </motion.div>
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
            duration: 1.2,
          }}
          viewport={{
            once: true,
          }}
        >
          <Image
            src={QuranImage}
            alt="Quran Image"
            className="w-24 md:w-28 object-cover animate-pulse"
          />
        </motion.div>
      </div>
    </div>
  );
}
