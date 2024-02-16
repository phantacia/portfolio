import MainLogo from "../icons/MainLogo";

const Banner = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full">
      {/* First banner */}
      <div className="relative whitespace-nowrap transform rotate-6 md:rotate-3 p-2 w-full bg-text h-20 text-background flex items-center gap-5">
        <div className="animate-marquee relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
      </div>

      {/* Second banner */}
      <div className="relative whitespace-nowrap transform -rotate-6 md:-rotate-3 -translate-y-14 p-2 w-full bg-primary h-20 text-background flex items-center gap-5">
        <div className="animate-marquee2 relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee2 relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee2 relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee2 relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee2 relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee2 relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee2 relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
        <div className="animate-marquee2 relative flex items-center gap-5 text-5xl font-cursive">
          <span>{children}</span>
          <div className="h-16 w-16">
            <MainLogo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
