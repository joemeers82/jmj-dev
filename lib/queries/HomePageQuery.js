import graphqlRequest from "../graphqlRequest";

export default async function homePageContentQuery() {
  const homeQuery = {
    query: `query HomeQuery {
      pages(where: {title: "home"}) {
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

  const res = await graphqlRequest(homeQuery);
  const homePageContent = res.data;

  return homePageContent;
}
