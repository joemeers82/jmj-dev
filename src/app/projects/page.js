import projectsPageQuery from "../../../lib/queries/ProjectsQuery";

export default async function Page({ params }) {
  const projectsPage = await projectsPageQuery();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {projectsPage.projects.edges.map((block, i) => {
        return (
          <div
            className="w-full"
            key={i}
            dangerouslySetInnerHTML={{
              __html: block.node.blocks[0].dynamicContent,
            }}
          ></div>
        );
      })}
    </main>
  );
}
