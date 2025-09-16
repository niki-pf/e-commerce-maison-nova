import Image from "next/image";
import React from "react";

export type PositionVariant =
  | "positionLeft"
  | "positionCenter"
  | "positionRight";
export type HeightVariant = "small" | "medium" | "large";

interface BannerProps {
  imageSrc: string;
  altText: string;
  h1?: string;
  paragraph?: string;
  button?: string;
  pos?: PositionVariant;
  height?: HeightVariant;
}

const positionClasses: Record<PositionVariant, string> = {
  positionLeft: "left-0",
  positionCenter: "left-1/2 transform -translate-x-1/2",
  positionRight: "right-0",
};

const heightClasses: Record<HeightVariant, string> = {
  small: "h-[20rem]",
  medium: "h-[30rem]",
  large: "h-[40rem]",
};

const Banner = ({
  imageSrc,
  altText,
  h1,
  paragraph,
  button,
  pos = "positionCenter",
  height = "small",
}: BannerProps) => {
  return (
    <section>
      <div className={`relative w-full ${heightClasses[height]}`}>
        <Image
          src={imageSrc}
          alt={altText}
          className="object-cover"
          fill
          priority
        />

        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-[85%] h-[85%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 flex flex-col items-center text-white text-center p-4">
          <div
            className={`absolute top-1/2 -translate-y-1/2 ${positionClasses[pos]} flex flex-col items-center gap-3`}>
            <h1 className="text-4xl md:text-4xl font-bold max-w-[20ch] leading-none">
              {h1}
            </h1>
            <p>{paragraph}</p>
            <button className="w-fit px-8 py-2 bg-white text-gray-900">
              {button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
