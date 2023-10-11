import "./globals.css";
import { Inter, Oleo_Script, Poppins } from "next/font/google";
// import Header from "@/components/wp/Header";
import StaticHeader from "@/components/StaticHeader";
const inter = Inter({ subsets: ["latin"] });
// import Head from "next/head";
import Script from "next/script";
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
  description: "Joe Meers Jankowski web development personal site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
          integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
          async
        ></script>

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
