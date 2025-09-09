import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {

    domains: ["images.unsplash.com"],

    remotePatterns: [{ protocol: "https", hostname: "cdn.dummyjson.com" }],

  },
};

export default nextConfig;
