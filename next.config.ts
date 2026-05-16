import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  trailingSlash: true, // required for GitHub Pages static file serving
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
