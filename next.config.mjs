/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  ...(isGitHubPages ? {
    output: "export",
    basePath: "/nordhus",
    assetPrefix: "/nordhus/",
    trailingSlash: true,
  } : {}),
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    ...(isGitHubPages ? { unoptimized: true } : {}),
  },
};

export default nextConfig;
