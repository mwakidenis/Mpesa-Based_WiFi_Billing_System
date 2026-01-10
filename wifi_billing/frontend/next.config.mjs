/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',         // Static export for Cloudflare Pages
  eslint: {
    ignoreDuringBuilds: false, // Fail build on ESLint errors for production
  },
  typescript: {
    ignoreBuildErrors: false,  // Fail build on TypeScript errors for production
  },
  images: {
    unoptimized: true,  // Keep unoptimized images or configure domain-based optimization
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Your environment variable
  },
  webpack(config) {
    // Split large files to avoid exceeding Cloudflare Pages limit
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 25 * 1024 * 1024, // Split files if they are larger than 25 MB
    };
    return config;
  },
};

export default nextConfig;
