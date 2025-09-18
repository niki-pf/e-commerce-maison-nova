"use client";

import Image from "next/image";
import Link from "next/link";

interface SplitHeroProps {
  leftImageUrl: string;
  rightImageUrl: string;
  leftButtonText: string;
  rightButtonText: string;
  leftHref: string;
  rightHref: string;
  buttonY?: string;
}

const SplitHero = ({
  leftImageUrl,
  rightImageUrl,
  leftButtonText,
  rightButtonText,
  leftHref,
  rightHref,
  buttonY = "50%",
}: SplitHeroProps) => {
  return (
    <section className="w-full h-[calc(100vh-4rem)] flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <Image
          src={leftImageUrl}
          alt="Left"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <Link href={leftHref}>
          <button
            className="absolute w-48 left-1/2 -translate-x-1/2 px-6 py-2 bg-background text-primary uppercase top-4 md:top-1/2 md:-translate-y-1/2 cursor-pointer hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-200"
            style={{ top: buttonY }}>
            {leftButtonText}
          </button>
        </Link>
      </div>

      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <Image
          src={rightImageUrl}
          alt="Right"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <Link href={rightHref}>
          <button
            className="absolute w-48 left-1/2 -translate-x-1/2 px-6 py-2 bg-white text-gray-900 uppercase top-4 md:top-1/2 md:-translate-y-1/2 cursor-pointer hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-200"
            style={{ top: buttonY }}>
            {rightButtonText}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SplitHero;
