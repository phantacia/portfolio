"use client";

import {
  useContext,
  useEffect,
  useMemo,
  useState,
  useLayoutEffect,
  useRef,
  createContext,
} from "react";
import Lenis from "@studio-freight/lenis";
import debounce from "../components/utils/debounce";

interface LenisScrollEvent {
  scroll: number;
}

const PageContext = createContext<{
  lenis: Lenis | null;
} | null>(null);

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  const reqIdRef = useRef<number>();

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let lastHeight = 0;
    let hideNav = false;
    let isScrolled = false;

    lenis.on("scroll", ({ scroll }: LenisScrollEvent) => {
      debounce(() => (lastHeight = scroll))();

      if (lastHeight < scroll && scroll > 160 && !hideNav) {
        document.body.classList.add("hide_header");
        hideNav = true;
      }

      if (lastHeight >= scroll && scroll > 160 && hideNav) {
        document.body.classList.remove("hide_header");
        hideNav = false;
      }

      if (lastHeight < scroll && scroll > 220 && !isScrolled) {
        document.body.classList.add("scrolled");
        isScrolled = true;
      }

      if (lastHeight >= scroll && scroll < 220 && isScrolled) {
        document.body.classList.remove("scrolled");
        isScrolled = false;
      }
    });

    setLenis(lenis);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    const animate = (time: number) => {
      lenis?.raf(time);
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(reqIdRef.current ?? 0);
  }, [lenis]);

  const memoedValue = useMemo(() => ({ lenis }), [lenis]);

  return (
    <PageContext.Provider value={memoedValue}>{children}</PageContext.Provider>
  );
};

export default function usePage() {
  return useContext(PageContext);
}
