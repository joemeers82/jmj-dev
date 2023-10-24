export default function StaticAboutMe() {
  return (
    <section
      id="about"
      className="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
      <div className="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"></div>
      <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
        <h6 className="text-large sm:text-xl md:text-2xl">
          Want to know more?
        </h6>
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          A bit <span className="poppins text-violet-400">about</span> me.
        </h3>
      </div>
      <p className="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
        I am . . .
      </p>
      <div className="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
        <div className="flex gap-6 sm:gap-8">
          <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
            1
          </p>
          <div className="flex flex-col gap-6 sm:gap-8">
            <h3 className="text-2xl sm:text-3xl md:text-5xl">
              a developer with 8 years experience
            </h3>
            <p>{`Having worked with everything from PHP to modern JavaScript frameworks. My journey through various projects has allowed me to blend traditional and current technologies in unique ways.`}</p>
          </div>
        </div>
        <div className="flex gap-6 sm:gap-8">
          <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
            2
          </p>
          <div className="flex flex-col gap-6 sm:gap-8">
            <h3 className="text-2xl sm:text-3xl md:text-5xl">
              a headless CMS enthusiast
            </h3>
            <p>{`Over the past few years I've enjoyed delving into modern CMS architecture, building Web APIs`}</p>
          </div>
        </div>
        {/* <div className="flex gap-6 sm:gap-8">
          <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
            3
          </p>
          <div className="flex flex-col gap-6 sm:gap-8">
            <h3 className="text-2xl sm:text-3xl md:text-5xl">
              a life long learner
            </h3>
            <p>{`I'm always learning, diving into new technologies and strategies to keep my development skills up-to-date and versatile.`}</p>
          </div>
        </div> */}
        <div className="flex gap-6 sm:gap-8">
          <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
            4
          </p>
          <div className="flex flex-col gap-6 sm:gap-8">
            <h3 className="text-2xl sm:text-3xl md:text-5xl">a scientist</h3>
            <p>
              {`Just kidding. "I am a scientist" is just one of my favorite songs by the band, `}
              <a
                className="underline text-violet-200 hover:text-violet-400 transition-colors duration-200 ease-in-out"
                href="https://www.youtube.com/watch?v=0-2k3hlmlDE"
                target="_blank"
              >
                Guided By Voices
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
