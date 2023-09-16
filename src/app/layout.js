import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
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
      <body className={poppins.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
