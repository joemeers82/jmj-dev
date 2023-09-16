import Image from "next/image";
import homePageContentQuery from "../../lib/queries/HomePageQuery";

export default async function Home() {
  const homePage = await homePageContentQuery();
  const html = homePage.pages.edges[0].node.blocks[0].dynamicContent;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-20">
      {homePage.pages.edges[0].node.blocks.map((block, i) => {
        return (
          <div
            className="w-full"
            key={i}
            dangerouslySetInnerHTML={{ __html: block.dynamicContent }}
          ></div>
        );
      })}
    </main>
  );
}
