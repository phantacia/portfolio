import React from "react";
import TagsButton from "../ui/TagsButton";

const Skills = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 md:grid grid-cols-4 grid-rows-2">
        <div className="row-span-2 justify-center items-center flex">
          <span className="font-cursive text-primary text-5xl">My skills.</span>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className="text-center text-lg md:text-xl font-semibold">
            Programming & Markup Language
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2">
              <TagsButton>HTML5</TagsButton>
              <TagsButton>CSS3</TagsButton>
              <TagsButton>SQL</TagsButton>
            </div>
            <div className="flex items-center justify-center gap-2">
              <TagsButton>Javascript</TagsButton>
              <TagsButton>Typescript</TagsButton>
            </div>
          </div>
        </div>

        <div className="row-span-2 flex flex-col gap-2 items-center justify-center">
          <h2 className="text-center text-lg md:text-xl font-semibold">
            Web Framework
          </h2>
          <div className="flex items-center justify-center gap-2">
            <TagsButton>React.js</TagsButton>
            <TagsButton>Next.js</TagsButton>
            <TagsButton>Tailwind CSS</TagsButton>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className="text-center text-lg md:text-xl font-semibold">
            Database & ORM
          </h2>
          <div className="flex items-center justify-center gap-2">
            <TagsButton>MySQL</TagsButton>
            <TagsButton>Prisma</TagsButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
