import React from "react";
import Banner from "../ui/Banner";
import Image from "next/image";
import TagsButton from "../ui/TagsButton";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <Banner>Selected Projects</Banner>
      <div className="px-10 py-5 w-full justify-center items-center flex flex-col md:flex-row gap-5">
        {/* Project 1 */}
        <div className="w-full md:w-[500px] h-[410px] md:h-96 overflow-hidden p-2 border-2 border-text rounded-xl flex flex-col gap-3">
          <Link href="https://hanazakari.vercel.app/" target="_blank">
            <Image
              src="/thumbnail/hanazakari.webp"
              alt="Hanazakari"
              width={500}
              height={500}
              className="rounded-xl border-text border object-cover w-full h-48"
            />
          </Link>
          <div className="flex flex-col gap-1">
            <Link
              href="https://hanazakari.vercel.app/"
              className="text-2xl font-semibold hover:underline"
              target="_blank"
            >
              Hanazakari
            </Link>
            <span className="bg-text w-fit px-2 rounded-xl text-background">
              Personal project
            </span>
            <p>Built with:</p>
            <div className="flex gap-2 flex-wrap">
              <TagsButton>Next.js</TagsButton>
              <TagsButton>Tailwind CSS</TagsButton>
              <TagsButton>Framer Motion</TagsButton>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="w-full md:w-[500px] h-[410px] md:h-96 overflow-hidden p-2 border-2 border-text rounded-xl flex flex-col gap-3">
          <Link href="https://seize-the-day-todo.vercel.app/" target="_blank">
            <Image
              src="/thumbnail/todo.webp"
              alt="Todo App"
              width={500}
              height={500}
              className="rounded-xl border-text border object-cover w-full h-48"
            />
          </Link>
          <div className="flex flex-col gap-1">
            <Link
              href="https://seize-the-day-todo.vercel.app/"
              target="_blank"
              className="text-2xl font-semibold hover:underline"
            >
              Seize the day: TODO
            </Link>
            <span className="bg-text w-fit px-2 rounded-xl text-background">
              Personal project
            </span>
            <p>Built with:</p>
            <div className="flex gap-2 flex-wrap">
              <TagsButton>React.js</TagsButton>
              <TagsButton>Tailwind CSS</TagsButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
