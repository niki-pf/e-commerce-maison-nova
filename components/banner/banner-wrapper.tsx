import React from "react";
import Banner from "./banner";
import { BannerWrapperProps } from "@/lib/interfaces";

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
            h2={banner.h2}
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
