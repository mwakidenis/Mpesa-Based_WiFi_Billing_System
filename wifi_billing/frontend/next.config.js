/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router enabled (Next.js 14+)
  experimental: {
    appDir: true,
  },

  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Skip TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Images optimization disabled (useful if deploying without loader)
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

  // Recommended for Next.js 14+ App Router deployments
  output: "standalone", // Build as standalone for Vercel/Node.js
};

module.exports = nextConfig;
