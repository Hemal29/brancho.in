"use client";

import { useCallback, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import BrandIntro from "@/components/layout/BrandIntro";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ChatWidget from "@/components/corporate/ChatWidget";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [navStage, setNavStage] = useState<0 | 1 | 2>(0);
  const [introDone, setIntroDone] = useState(false);

  const handleNavbarReveal = useCallback(() => setNavStage(1), []);
  const handleLogoLanding = useCallback(() => setNavStage(2), []);
  const handleFinish = useCallback(() => {
    setNavStage(2);
    setIntroDone(true);
  }, []);

  return (
    <>
      <SmoothScroll />
      <Navbar navStage={navStage} />
      {!introDone && (
        <BrandIntro
          onNavbarReveal={handleNavbarReveal}
          onLogoLanding={handleLogoLanding}
          onFinish={handleFinish}
        />
      )}
      <main>{children}</main>
      <Footer />
      <ScrollProgress />
      <CustomCursor />
      <ChatWidget />
    </>
  );
}