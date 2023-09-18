import Image from "next/image";
import homePageContentQuery from "../../lib/queries/HomePageQuery";
import Hero from "@/components/Hero";
import TechList from "@/components/TechList";
export default async function Home() {
  const homePage = await homePageContentQuery();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-20">
      <Hero props={homePage[0]} />
      <TechList props={homePage[1]} />
    </main>
  );
}
