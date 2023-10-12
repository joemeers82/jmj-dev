"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GetInTouch from "./GetInTouch";
import { usePathname } from "next/navigation";

export default function StaticHeader() {
  const pathname = usePathname();
  const [isProjects, setIsProjects] = useState(
    pathname === "/projects" ? true : false
  );

  useEffect(() => {
    setIsProjects(pathname === "/projects" ? true : false);
  }, [pathname]);
  let [y, setY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = `sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid ${
    y > 0
      ? "py-4 bg-slate-950 border-violet-950"
      : "py-6 bg-transparent border-transparent"
  }`;
  return (
    <header
      className={
        "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " +
        (y > 0
          ? " py-4 bg-slate-950 border-violet-950 "
          : " py-6 bg-transparent border-transparent")
      }
    >
      <h1 className="font-medium">
        <a href="/">
          <strong className="font-bold poppins">Joe </strong> Meers Jankowski
        </a>
      </h1>
      {!isProjects && (
        <div className="sm:flex items-center gap-4 hidden">
          <a href="#projects" className="duration-200 hover:text-violet-400">
            <p>Projects</p>
          </a>
          <a
            href="#about"
            className="duration-200 hover:text-violet-400"
            // onClick={(e) => scrollTo(e, "about")}
          >
            <p>About Me</p>
          </a>
        </div>
      )}
      <GetInTouch
        classList="blueShadow cursor-pointer relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950 "
        text="Get in touch "
      />
    </header>
  );
}
