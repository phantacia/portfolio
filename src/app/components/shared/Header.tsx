"use client";

import Link from "next/link";
import React, { useRef } from "react";
import MenuButton from "../ui/MenuButton";
import MainLogo from "../icons/MainLogo";
import gsap from "gsap";

const Header = () => {
  const logoRef = useRef(null);

  const onLogoEnter = () => {
    const currentColor = logoRef.current.getAttribute("data-color");
    const logoSvg = logoRef.current.firstChild.firstChild;

    const nextColor =
      currentColor === "#c94940"
        ? "#28903c"
        : currentColor === "#28903c"
        ? "#2c6cad"
        : "#c94940";

    logoRef.current.setAttribute("data-color", nextColor);

    gsap.to(logoSvg, { fill: currentColor, duration: 0.2, ease: "power1.out" });
  };

  const onLogoLeave = () => {
    const logoSvg = logoRef.current.firstChild.firstChild;
    gsap.to(logoSvg, { fill: "#171717", duration: 0.2, ease: "power1.out" });
  };

  return (
    <div className="header px-10 min-w-screen fixed left-0 top-0 z-10 w-screen transition-all duration-500 ease-out">
      <div className="overflow-hidden bg-none">
        <div className="header_container flex justify-between items-center transition-all duration-500 ease-out will-change-transform py-4">
          <Link
            href="/"
            className="header_logo pointer-events-auto cursor-pointer leading-none transition-height [&>svg]:h-10 [&>svg]:duration-500 [&>svg]:ease-out lg:[&>svg]:h-14"
            data-color="#c94940"
            ref={logoRef}
            onMouseEnter={onLogoEnter}
            onMouseLeave={onLogoLeave}
          >
            <MainLogo />
          </Link>
          <Link href="/#about">
            <MenuButton>About</MenuButton>
          </Link>
          <Link href="/#projects">
            <MenuButton>Projects</MenuButton>
          </Link>
          <Link href="/#contact">
            <MenuButton>Contact</MenuButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
