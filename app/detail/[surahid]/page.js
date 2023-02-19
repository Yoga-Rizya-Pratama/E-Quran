import Audio from "@/components/Audio";
import Tafsir from "@/components/Tafsir";
import AnotherSurah from "@/components/AnotherSurah";

const getDetailSurah = async (nomor) => {
  const data = await fetch(`https://equran.id/api/v2/surat/${nomor}`, {
    next: { revalidate: 60 },
  });

  const res = await data.json();
  return res;
};

const getTafsirSurah = async (nomor) => {
  const data = await fetch(`https://equran.id/api/v2/tafsir/${nomor}`);

  const res = await data.json();
  return res;
};

export default async function DetailSurah({ params: { surahid } }) {
  const fetch = await getDetailSurah(surahid);
  const data = fetch.data;

  const fetchTafsir = await getTafsirSurah(surahid);
  const dataTafsir = fetchTafsir.data;

  return (
    <div>
      <div className="bg-[#BB75FD] flex flex-col items-center justify-center py-3 md:py-6 rounded-lg relative">
        <h3 className="text-md font-poppins mb-2 font-semibold md:text-2xl">
          {data.namaLatin}
        </h3>
        <h3 className="text-sm mb-2 md:text-lg">{data.arti}</h3>
        <hr className="w-32 mb-2" />
        <h3 className="text-xs font-poppins mb-5">
          {data.tempatTurun} - {data.jumlahAyat} Ayat
        </h3>
        <h3 className="font-arabic text-xl mb-2 md:text-5xl">
          بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
        </h3>
        <div>
          <Audio fileAudio={data.audioFull["01"]} color="text-white" />
        </div>
      </div>
      <div className="py-5">
        {data.ayat.map((surah, index) => (
          <div key={surah.nomorAyat}>
            <div className="bg-[#111E4E] py-3 px-5 rounded-md flex items-center justify-between">
              <h3 className="text-xs font-poppins text-white] md:text-lg">
                {surah.nomorAyat}
              </h3>
              <Audio fileAudio={surah.audio["01"]} color="text-[#BB75FD]" />
            </div>
            <div className="py-3 md:py-10">
              <h3 className="font-arabic text-right text-xl md:text-5xl">
                {surah.teksArab}
              </h3>
              <p className="font-poppins text-[10px] mt-3 md:text-[15px] md:mt-10">
                {surah.teksIndonesia}
              </p>
            </div>
            <hr className="mb-3" />
            <Tafsir text={dataTafsir.tafsir[index]["teks"]} />
          </div>
        ))}
      </div>
      <AnotherSurah prev={data.suratSebelumnya} next={data.suratSelanjutnya} />
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`https://equran.id/api/v2/surat`);
  const surah = await res.json();

  return surah.data.map((surahid) => ({
    surahid: surahid.nomor.toString(),
  }));
}
