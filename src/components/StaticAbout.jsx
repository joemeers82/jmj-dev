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
          Tech I <span className="poppins text-violet-400">Love</span> to{" "}
          <span className="poppins text-violet-400">Work</span> with
        </h3>
      </div>
      <p className="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
        includes . . .
      </p>
      <div className="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
        <div className="flex gap-6 sm:gap-8">
          {/* <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
            1
          </p> */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <h3 className="text-2xl sm:text-3xl md:text-5xl">
              JavaScript, React, Node.js
            </h3>
            <p>{`I love the component based architecture of React and associated frameworks like NextJS to build scalable front-end applications while making use of the power of Node.js, its concepts, and its ecosystem.`}</p>
          </div>
        </div>
        <div className="flex gap-6 sm:gap-8">
          {/* <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
            2
          </p> */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <h3 className="text-2xl sm:text-3xl md:text-5xl">
              Web API Development and Headless CMS Integration
            </h3>
            <p>{`I enjoy building Web APIs using modern flexible CMS architecture. Specifically with Strapi, which is a Node.js based CMS which is developer friendly and open-source.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
