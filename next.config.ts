import type { NextConfig } from "next";

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({
//   reactStrictMode: true,
// });

const nextConfig: NextConfig = { 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stradale.com.br',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      }
    ],
  },
};

export default nextConfig;
