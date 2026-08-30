import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/products/rta-cabinets", destination: "/products/cabinets", permanent: true },
      { source: "/products/doors-and-drawer-fronts", destination: "/products/doors", permanent: true },
      { source: "/products/molding", destination: "/products", permanent: true },
      { source: "/products/moldings", destination: "/products", permanent: true },
      { source: "/products/specialty-items", destination: "/products/specialty", permanent: true },
      { source: "/gallery/sonoran-formex", destination: "/gallery/sonoran-tfl", permanent: true },
    ];
  },
};

export default nextConfig;
