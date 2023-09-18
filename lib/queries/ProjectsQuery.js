import graphqlRequest from "../graphqlRequest";
import { extractImageUrl, parseObjString } from "../helpers";
export default async function projectsPageQuery() {
  const projectsQuery = {
    query: `query ProjectsQuery {
        projects {
          edges {
            node {
              blocks {
                ... on AcfProjectHeroBlock {
                  attributesJSON
                }
                dynamicContent
              }
            }
          }
        }
      }`,
  };
  const res = await graphqlRequest(projectsQuery);
  // console.log(res.data.projects.edges[0].node.blocks[0].dynamicContent);

  const projectsContent = res.data.projects.edges.map((edge) => {
    const dynamicContent = edge.node.blocks[0].dynamicContent;
    const attributesJSON = edge.node.blocks[0].attributesJSON;

    return {
      project_image: extractImageUrl(dynamicContent),
      project_data: parseObjString(attributesJSON),
    };
  });

  return projectsContent;
}
