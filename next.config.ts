import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.adimsweb.com",
      },
    ],
  },
};

export default nextConfig;
