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
      { source: "/products/doors-and-drawer-fronts", destination: "/products", permanent: true },
      { source: "/products/doors/:slug", destination: "/products", permanent: true },
      { source: "/products/molding", destination: "/products/components", permanent: true },
      { source: "/products/accessories", destination: "/products/components", permanent: true },
      { source: "/products/specialty-items", destination: "/products/components", permanent: true },
      { source: "/products/design-styles", destination: "/gallery", permanent: true },
      { source: "/products/design-styles/:slug", destination: "/gallery", permanent: true },
      { source: "/gallery/sonoran-formex", destination: "/gallery/sonoran-tfl", permanent: true },
    ];
  },
};

export default nextConfig;
