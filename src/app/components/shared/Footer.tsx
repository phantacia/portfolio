import GithubLogo from "../icons/GithubLogo";
import MainLogo from "../icons/MainLogo";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      id="contact"
      className="px-10 py-4 bg-text w-full text-background flex flex-col justify-center items-center md:items-stretch gap-3"
    >
      <div className="border-b-2 border-background flex flex-col gap-3 md:flex-row items-center text-center md:justify-between">
        <h3 className="text-primary font-cursive text-4xl md:text-5xl">
          Let&apos;s work together
        </h3>
        <div className="flex flex-col justify-center items-center gap-1">
          <p>Discuss with me?</p>
          <Link
            href="mailto:phantacias@gmail.com"
            className="hover:underline hover:text-primary"
          >
            phantacias@gmail.com
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <p>Find me at</p>
          <Link
            href="https://github.com/phantacia"
            target="_blank"
            className="w-10 h-10"
          >
            <GithubLogo />
          </Link>
        </div>
        <div className="h-32 w-32 md:h-44 md:w-44 text-primary mb-3">
          <MainLogo />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <span>“Nothing worth having comes easy”</span>
        <span>©2024 Patricia Andrea / Phantacia</span>
      </div>
    </div>
  );
};

export default Footer;
