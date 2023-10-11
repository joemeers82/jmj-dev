import Image from "next/image";
// import homePageContentQuery from "../../lib/queries/HomePageQuery";
// import Hero from "@/components/wp/Hero";
// import TechList from "@/components/wp/TechList";
import StaticHero from "@/components/StaticHero";
import StaticProjects from "@/components/StaticProjects";
import StaticAboutMe from "@/components/StaticAbout";
import ContactForm from "@/components/ContactForm";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-20">
      <StaticHero />
      <StaticProjects />
      <StaticAboutMe />
      <ContactForm />
    </main>
  );
}
