import { FullPageBlockProps } from "@/lib/interfaces";
import { PositionVariant } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const positionClasses: Record<PositionVariant, string> = {
  topLeft: "left-0 top-0",
  topCenter: "left-1/2 top-0 transform -translate-x-1/2",
  topRight: "right-0 top-0",
  midLeft: "left-0 top-1/2 transform -translate-y-1/2",
  midCenter: "left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
  midRight: "right-0 top-1/2 transform -translate-y-1/2",
  bottomLeft: "left-0 bottom-0",
  bottomCenter: "left-1/2 bottom-0 transform -translate-x-1/2",
  bottomRight: "right-0 bottom-0",
};

const FullPageBlock = ({
  imageSrc,
  altText,
  h2,
  paragraph,
  link,
  linkPrompt,
  pos = "midCenter",
}: FullPageBlockProps) => {
  return (
    <section>
      <div className="relative w-full h-[calc(100vh-4rem)] ">
        <Image
          src={imageSrc}
          alt={altText}
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative w-[70%] h-[70%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 flex flex-col items-center text-background text-center p-4">
          <div
            className={`absolute ${positionClasses[pos]} flex flex-col items-center gap-3`}>
            <h1 className="text-4xl md:text-6xl font-bold max-w-[15ch] leading-none">
              {h2}
            </h1>
            <p className="text-background">{paragraph}</p>
            <Link
              className="w-fit px-8 py-1 bg-foreground text-primary uppercase"
              href={link}>
              {linkPrompt}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullPageBlock;
