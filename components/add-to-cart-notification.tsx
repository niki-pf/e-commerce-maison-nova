"use client";

import Image from "next/image";
import React from "react";

interface AddToCartNotificationProps {
  title: string;
  image: string;
}

const AddToCartNotification = ({
  title,
  image,
}: AddToCartNotificationProps) => {
  return (
    <div className="w-[400px] h-fit flex items-center gap-2 bg-white rounded-sm">
      <div className="relative w-20 aspect-square bg-amber-400">
        <Image
          src={image}
          alt={`Image of ${title}`}
          fill
          className="object-fit"
        />
      </div>
      <div className="flex flex-col">
        <p>{title}</p>
        <p className="font-semibold">Tillagd i kundvagn</p>
      </div>
    </div>
  );
};

export default AddToCartNotification;
