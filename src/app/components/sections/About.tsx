import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center bg-[url(/icons/flower.svg)] w-full h-screen bg-cover md:h-[1000px] md:bg-[length:100%_100%] bg-local aspect-square bg-center bg-no-repeat"
    >
      <div className="flex flex-col justify-center items-center w-[80%] md:w-[60%] xl:w-[40%]">
        <h2 className="text-7xl md:text-8xl text-primary font-cursive">
          Intro.
        </h2>
        <p className="text-background text-xl lg:text-2xl text-justify">
          Hi there! I&apos;m Patricia—a dedicated web developer driven by a
          relentless pursuit of knowledge and innovation. I specialize in
          weaving enchanting front-end magic, sculpting websites that uniquely
          resonate with users. My passion lies in conjuring wonders that not
          only captivate but cast a spell, etching unforgettable experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
