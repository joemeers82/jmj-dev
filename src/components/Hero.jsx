"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ props }) {
  console.log(props);
  return (
    <section class="w-full max-w-7xl mx-auto p-6">
      <div class="flex flex-col-reverse md:flex-row my-10">
        <div class="w-full md:w-1/2 mb-8 md:mb-5 flex flex-col md:items-start">
          <h1 class="font-medium text-4xl mt-4 text-left mb-5 md:text-5xl">
            {props.block_data.data.hero_heading}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: props.block_data.data.hero_about,
            }}
          />

          <div class="flex justify-center md:justify-start mt-8 items-center gap-4">
            <Link
              className="text-blue-500 hover:underline mr-4"
              href={props.block_data.data.github_url.url}
              target={props.block_data.data.github_url.target}
            >
              <Image
                src="/assets/github-icon.svg"
                width={30}
                height={30}
                alt="Github Icon"
                title="View GitHub"
              />
            </Link>
            <Link
              className="text-blue-500 hover:underline mr-4"
              href={props.block_data.data.linkedin_url.url}
              target={props.block_data.data.linkedin_url.target}
            >
              <Image
                src="/assets/linkedin-icon.svg"
                width={30}
                height={30}
                alt="LinkedIn Icon"
                title="View LinkedIn"
              />
            </Link>
            <Link
              href="/projects"
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div class="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            className="rounded-wacky border object-cover h-[350px] w-[350px]"
            src={props.block_image}
            width={350}
            height={350}
            alt={"Hero Image"}
          />
        </div>
      </div>
    </section>
  );
}
