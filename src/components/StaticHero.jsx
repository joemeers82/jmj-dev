"use client";
import { useEffect, useState } from "react";
import GetInTouch from "./GetInTouch";

export default function StaticHero() {
  useEffect(() => {
    const textWrappers = document.querySelectorAll(".anime .letters");

    textWrappers.forEach((wrapper) => {
      wrapper.innerHTML = wrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    });

    anime.timeline({ loop: false }).add({
      targets: ".anime .letter",
      scale: [0, 1],
      duration: 900,
      elasticity: 400,
      delay: (el, i) => 40 * (i + 1),
    });
  }, []);

  return (
    <>
      <section id="intro-page" className="py-8  sm:py-14">
        <div className=" flex flex-col lg:justify-center text-center w-fit p-0 lg:p-4  mx-auto">
          <h1 className="anime break-all relative h2 font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight sm:leading-snug md:leading-normal">
            <span className="letters block xl:inline">Hi! {`I'm`}</span>

            <span className="letters font-poppins text-violet-400"> Joe </span>
            <span className="letters">Meers </span>

            <span className="letters block md:block lg:inline">Jankowski</span>

            <p className="leading-tight sm:leading-snug md:leading-normal">
              <span className="letters">Full Stack</span>
              <span className="letters max-[500px]:block lg:inline font-poppins text-violet-400 ">
                {" "}
                Developer{" "}
              </span>
            </p>
          </h1>

          <p className="text-base sm:text-lg mt-5 md:text-xl lg:max-w-[80%] mx-auto">
            I'm a <span className="text-violet-400">full stack developer</span>{" "}
            {`from the San Francisco Bay Area. I'm passionate about building modern, scalable web applications with a focus on the front-end.`}
          </p>

          <GetInTouch
            classList="blueShadow mx-auto my-10 lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
            text="Get in touch &rarr;"
          />
        </div>
      </section>
    </>
  );
}
