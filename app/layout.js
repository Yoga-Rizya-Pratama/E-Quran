import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-900 text-white font-mynerver scrollbar-thin scrollbar-thumb-[#9B46F2] scrollbar-track-neutral-600 scrollbar-thumb-rounded-lg scrollbar-w-[3px] md:scrollbar-w-2 overflow-x-hidden">
        <div className="px-6 md:px-20 pb-3">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
