import type { Metadata } from "next";
import { Pinyon_Script } from "next/font/google";
import "./globals.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { PageProvider } from "./context/PageContext";

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon-script",
});

export const metadata: Metadata = {
  title: "Patricia Andrea's Portfolio",
  description:
    "Meet Patricia, a dedicated web developer with a passion for crafting enchanting front-end experiences. Driven by a relentless pursuit of knowledge and innovation, she specializes in creating websites that not only captivate but also cast a spell, leaving users with unforgettable digital encounters. Explore Patricia's work for a glimpse into the fusion of technical expertise and creative magic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pinyonScript.variable}>
      <body className="flex flex-col min-h-screen">
        <PageProvider>
          <Header />
          {children}
          <Footer />
        </PageProvider>
      </body>
    </html>
  );
}
