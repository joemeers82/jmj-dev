import { extractImageUrl, parseObjString } from "../helpers";
import graphqlRequest from "../graphqlRequest";

export default async function homePageContentQuery() {
  const homeQuery = {
    query: `query HomeQuery {
      pages(where: {title: "home"}) {
        edges {
          node {
            blocks {
              ... on AcfHeroBlock {
                attributesJSON
                dynamicContent
              }
              ... on AcfTechListBlock {
                attributesJSON
                dynamicContent
              }
            }
          }
        }
      }
    }`,
  };

  const res = await graphqlRequest(homeQuery);
  const homePageContent = res.data.pages.edges
    .map((edge) => {
      return edge.node.blocks.map((block) => {
        const dynamicContent = block.dynamicContent;
        const attributesJSON = block.attributesJSON;

        return {
          block_image: extractImageUrl(dynamicContent),
          block_data: parseObjString(attributesJSON),
        };
      });
    })
    .flat();

  return homePageContent;
}
