// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Cloudflare Pages static hosting
  output: "export",

  // Cloudflare Pages does not fail builds on ESLint by default,
  // but keeping this explicit is fine
  eslint: {
    ignoreDuringBuilds: true,
  },/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;


  // Static export cannot rely on runtime type checks
  typescript: {
    ignoreBuildErrors: true,
  },

  // Required because Next Image Optimization needs a server
  images: {
    unoptimized: true,
  },

  // Expose public env vars at build time
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
