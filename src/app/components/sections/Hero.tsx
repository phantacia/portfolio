"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

const Hero = () => {
  useEffect(() => {
    const titles = document.querySelectorAll(".h_title");
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll("span span");
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: "cubic-text",
        },
        delay
      );
    });

    return () => {};
  }, []);

  return (
    <div className="h-screen 2xl:h-[40vh] p-10 flex flex-col items-center justify-center">
      <div className="h_container relative">
        <h1 className="h_title flex flex-col relative w-full text-center text-7xl md:text-9xl font-semibold uppercase">
          <span className="inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-full will-change-transform">
              Patricia
            </span>
          </span>

          <span className="inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-full will-change-transform">
              Andrea
            </span>
          </span>
        </h1>

        <h1 className="h_title flex flex-col absolute bottom-7 md:bottom-16 w-full text-center text-primary font-cursive text-7xl md:text-9xl">
          <span className="inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-full will-change-transform">
              Portfolio
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
