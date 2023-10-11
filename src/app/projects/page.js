import projectsPageQuery from "../../../lib/queries/ProjectsQuery";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const projectsPage = await projectsPageQuery();
  return (
    <>
      <h2 className="pt-28 text-3xl md:text-4xl font-bold text-center">
        Projects
      </h2>
      <main className="flex flex-col max-w-7xl mx-auto md:grid grid-cols-2 gap-9 p-10 md:p-20 ">
        {projectsPage.map((project, i) => {
          const data = project.project_data.data;
          return (
            <article
              key={i}
              className="w-full p-4 bg-gray-100 text-slate-900 shadow-md rounded-lg flex flex-col h-full "
            >
              <div className="flex flex-col space-y-4 h-full justify-around ">
                <Image
                  src={project.project_image}
                  width={260}
                  height={175}
                  alt={data.project_title}
                  className="mx-auto rounded-t-lg mb-3"
                  style={{ objectFit: "contain" }}
                />
                <div>
                  <h1 className="text-xl text-left mb-3">
                    {data.project_title}
                  </h1>
                  <p dangerouslySetInnerHTML={{ __html: data.project_about }} />

                  <nav className="flex items-center mt-2 py-3">
                    {data.has_github_url === "1" && (
                      <Link
                        href={data.github_url.url}
                        target={data.github_url.target}
                      >
                        <Image
                          src="/assets/github-icon.svg"
                          width={30}
                          height={30}
                          title="View code on GitHub"
                          alt="Github Icon"
                        />
                      </Link>
                    )}
                    <Link
                      href={data.project_url.url}
                      target={data.project_url.target}
                    >
                      <Image
                        src="/assets/open-icon.svg"
                        width={30}
                        height={30}
                        title="Open project in new tab"
                        alt="Open project in a new tab"
                      />
                    </Link>
                  </nav>

                  <div className="mt-4 flex gap-2">
                    {data.project_tools.map((tool, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center cursor-pointer p-1 h-[50px] w-[50px] bg-white rounded-full shadow bg-no-repeat"
                      >
                        <Image
                          title={tool}
                          alt={`${tool} Icon`}
                          src={"/assets/" + tool + "-icon.svg"}
                          height="35"
                          width="35"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </main>
    </>
  );
}
