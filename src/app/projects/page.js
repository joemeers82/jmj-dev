import projectsPageQuery from "../../../lib/queries/ProjectsQuery";
import Image from "next/image";
import Link from "next/link";
export default async function Page({ params }) {
  const projectsPage = await projectsPageQuery();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-20">
      {projectsPage.map((project, i) => {
        const data = project.project_data.data;
        return (
          <article
            key={i}
            className="w-full max-w-7xl mx-auto p-6 bg-gray-100 shadow-lg rounded-md my-10"
          >
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
              <section className="w-full md:w-1/2 p-3">
                <Image
                  src={project.project_image}
                  width={500}
                  height={500}
                  alt={data.project_title}
                />
                <nav className="flex items-center gap-5 pl-5">
                  {data.has_github_url === "1" && (
                    <div className="mt-3 flex items-center space-x-2">
                      <Link
                        href={data.github_url.url}
                        target={data.github_url.target}
                      >
                        <Image
                          src="/assets/github-icon.svg"
                          width={35}
                          height={50}
                          title="View code on GitHub"
                          alt="Github Icon"
                        />
                      </Link>
                    </div>
                  )}
                  <div className="mt-3">
                    <Link
                      href={data.project_url.url}
                      target={data.project_url.target}
                    >
                      <Image
                        src="/assets/open-icon.svg"
                        width={35}
                        height={50}
                        title="Open project in new tab"
                        alt="Open project in a new tab"
                      />
                    </Link>
                  </div>
                </nav>
              </section>

              <section className="w-full md:w-1/2 p-3">
                <h1 className="py-5 text-4xl text-left border-b mb-5">
                  {data.project_title}
                </h1>
                <p dangerouslySetInnerHTML={{ __html: data.project_about }} />
                <div className="mt-6 flex justify-center md:justify-start gap-3">
                  {data.project_tools.map((tool, i) => {
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-center cursor-pointer p-2 h-[60px] w-[60px] bg-white rounded-full shadow bg-no-repeat"
                      >
                        <Image
                          title={tool}
                          alt={`${tool} Icon`}
                          src={"/assets/" + tool + "-icon.svg"}
                          height="40"
                          width="40"
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </article>
        );
      })}
    </main>
  );
}
