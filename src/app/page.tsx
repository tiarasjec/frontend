"use client";
import Lenis from "@/components/shared/lenis";
import { HeroParallax } from "@/components/widgets/hero";
import { About } from "@/components/widgets/about";
import { StarsCanvas } from "@/components/ui/stars";
import { useEffect, useState } from "react";

export default function Home() {
  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);

  useEffect(() => {
    fetch("/api/gallery")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 py-0 md:gap-8 md:py-0">
      <Lenis>
        <StarsCanvas />
        <HeroParallax images={images} />
        <About />
      </Lenis>
    </main>
  );
}
