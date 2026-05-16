import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  trailingSlash: true,
  basePath: isProd ? "/fexnet-2026" : "",
  assetPrefix: isProd ? "/fexnet-2026/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
