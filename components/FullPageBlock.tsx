import Image from "next/image";
import React from "react";

type PositionVariant =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "midLeft"
  | "midCenter"
  | "midRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";

interface FullPageBlockProps {
  imageSrc: string;
  altText: string;
  h1?: string;
  paragraph?: string;
  button?: string;
  pos?: PositionVariant;
}

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
  h1 = "Default titel",
  paragraph,
  button,
  pos = "midCenter",
}: FullPageBlockProps) => {
  return (
    <section>
      <div className="relative w-full h-[50rem]">
        <Image
          src={imageSrc}
          alt={altText}
          className="object-cover"
          fill
          priority
        />

        <div className="relative w-[70%] h-[70%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 flex flex-col items-center text-white text-center p-4">
          <div
            className={`absolute ${positionClasses[pos]} flex flex-col items-center gap-3`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mac-w-[15ch] leading-none">
              {h1}
            </h1>
            <p>{paragraph}</p>
            <button className="w-fit px-8 py-1 bg-white  text-gray-900 uppercase">
              {button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullPageBlock;
