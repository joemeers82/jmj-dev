"use client";
import Link from "next/link";
import halloweenImg from "../../public/assets/halloween.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between text-center py-4 border-b shadow-md fixed bg-white w-full h-20">
      <div className="mx-auto w-full max-w-screen-xl px-10 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          <Link href="/">Joe Meers Jankowski</Link>
        </h2>

        <Image
          className="border rounded-full"
          src={halloweenImg}
          alt="Happy Halloween!"
          height="70"
          width="70"
        />
      </div>
    </header>
  );
}
