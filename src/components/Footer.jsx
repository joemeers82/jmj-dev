import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center">
      <p className="px-4 py-2 bg-white text-slate-950 mb-5 font-medium">
        Connect with me &darr;
      </p>

      <div className="flex-wrap items-center justify-center flex gap-8">
        <Link href="https://github.com/joemeers82" target="_blank">
          <Image
            src="/assets/github-icon.svg"
            width={30}
            height={30}
            className="filter invert"
            title="View code on GitHub"
            alt="Github Icon"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/joe-meers-jankowski-5a9b6521/"
          target="_blank"
        >
          <Image
            src="/assets/linkedin-icon.svg"
            width={30}
            height={30}
            className="filter invert"
            title="View me on LinkedIn"
            alt="LinkedIn Icon"
          />
        </Link>
        <p className="w-full  md:w-fit text-center">
          <a
            href="mailto:joe.meers.jankowski@gmail.com"
            className=" text-violet-200 hover:text-violet-400  transition-all duration-200 ease-in-out hover:underline"
          >
            joe.meers.jankowski@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
