/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages
  output: "export",

  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Skip TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Images optimization disabled (required for static export)
  images: {
    unoptimized: true,
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  // Webpack customizations
  webpack(config) {
    // Split large chunks for better caching
    config.optimization.splitChunks = {
      chunks: "all",
      maxSize: 25 * 1024 * 1024, // 25 MB
    };
    return config;
  },
};

module.exports = nextConfig;
