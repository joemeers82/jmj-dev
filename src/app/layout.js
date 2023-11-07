import "./globals.css";
import { Inter, Oleo_Script, Poppins } from "next/font/google";
// import Header from "@/components/wp/Header";

import StaticHeader from "@/components/StaticHeader";
const inter = Inter({ subsets: ["latin"] });
// import Head from "next/head";

import GTM from "@/components/GTM";
import ParticleBackground from "@/components/ParticleBackground";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Joe Meers Jankowski",
  description: "Joe Meers Jankowski, Full Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GTM />
      </head>
      <body
        data-sveltekit-preload-data="hover"
        className={`bg-slate-950 text-white relative ${poppins.className}`}
      >
        {/* <Header></Header> */}
        <StaticHeader />
        {children}
        <Footer />
        <ParticleBackground />
      </body>
    </html>
  );
}
