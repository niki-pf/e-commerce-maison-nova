import React from "react";
import Banner, { HeightVariant, PositionVariant } from "./banner";

interface BannerItem {
  imageSrc: string;
  altText: string;
  h1?: string;
  paragraph?: string;
  button?: string;
  pos?: PositionVariant;
  height?: HeightVariant;
}

interface BannerWrapperProps {
  banners: BannerItem[];
}

const BannerWrapper = ({ banners }: BannerWrapperProps) => {
  return (
    <section className="w-full">
      <div
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))` }}>
        {banners.map((banner, idx) => (
          <Banner
            key={idx}
            imageSrc={banner.imageSrc}
            altText={banner.altText}
            h1={banner.h1}
            paragraph={banner.paragraph}
            button={banner.button}
            pos={banner.pos ?? "positionCenter"}
            height={banner.height ?? "small"}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerWrapper;
