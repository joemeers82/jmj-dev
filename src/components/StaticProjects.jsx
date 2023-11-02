export default function StaticProjects() {
  return (
    <section className="py-20 lg:py-32 flex flex-col gap-24" id="projects">
      <div className="flex flex-col gap-2 text-center">
        <h6 className="text-large sm:text-xl md:text-2xl">Front-Endeavors</h6>
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          Curious to <span className="poppins text-violet-400">see</span> my
          work?
        </h3>
      </div>
      <a
        href="/projects"
        className="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
      >
        <p>Go to Projects</p>
      </a>
    </section>
  );
}
