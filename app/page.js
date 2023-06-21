import Surah from "@/components/Surah";
import Text from "@/components/Text";
import Textwriter from "@/components/Typewriter";
import Link from "next/link";

export async function getData() {
  const data = await fetch(`https://equran.id/api/v2/surat`);

  const res = await data.json();

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return res;
}

export default async function Page() {
  const fetch = await getData();
  const data = fetch.data;

  return (
    <>
      <Textwriter />
      {/* CONTENT */}
      <Text
        title={`Surah`}
        cls={`mt-3 md:mt-6 font-semibold mb-2 md:text-xl`}
      />
      <hr className="h-[1px] border-[#9B46F2]" />
      <div className="mt-3 md:flex md:flex-row md:flex-wrap md:justify-center ">
        {data.map((surah) => (
          <div key={surah.nomor} className="md:w-96">
            <Link href={`detail/${surah.nomor}`}>
              <Surah
                jumlahAyat={surah.jumlahAyat}
                nama={surah.nama}
                nomor={surah.nomor}
                tempatTurun={surah.tempatTurun}
                namaLatin={surah.namaLatin}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}s
