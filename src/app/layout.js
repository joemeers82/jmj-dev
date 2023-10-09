import "./globals.css";
import { Inter, Oleo_Script, Poppins } from "next/font/google";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";
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
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VWGPNRPYK3"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N7RP95G6');
            `,
          }}
        />
      </head>
      <body className={poppins.className}>
        <Header></Header>

        {children}
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7RP95G6" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
