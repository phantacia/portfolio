"use client";

import MainLogo from "../icons/MainLogo";
import React, { useEffect } from "react";
import gsap from "gsap";

const Banner = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    let tween = gsap.to(".marquee_part", {
      xPercent: -100,
      repeat: -1,
      duration: 5,
      ease: "linear",
    });
  }, []);
  return (
    <section className="w-full">
      {/* First banner */}
      <div className="marquee_inner relative whitespace-nowrap transform rotate-6 md:rotate-3 p-2 w-full bg-text h-20 text-background flex items-center gap-5">
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
      </div>

      {/* Second banner */}
      <div className="marquee_inner relative whitespace-nowrap transform -rotate-6 md:-rotate-3 -translate-y-14 p-2 w-full bg-primary h-20 text-background flex items-center gap-5">
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="marquee_part relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="marquee_logo h-16 w-16">
            <MainLogo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
