import "./globals.css";
import { Inter, Poppins } from "next/font/google";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VWGPNRPYK3"
          strategy="async"
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
    
          gtag("config", "G-VWGPNRPYK3");
        `}
        </Script>
      </head>
      <body className={poppins.className}>
        <Header></Header>

        {children}
      </body>
    </html>
  );
}
