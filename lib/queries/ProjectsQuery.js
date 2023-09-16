import graphqlRequest from "../graphqlRequest";

export default async function projectsPageQuery() {
  const projectsQuery = {
    query: `query ProjectsQuery {
        projects {
          edges {
            node {
              blocks {
                dynamicContent
              }
            }
          }
        }
      }`,
  };
  const res = await graphqlRequest(projectsQuery);
  const projectsContent = res.data;
  return projectsContent;
}
