// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ⚠️ WARNING:
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // Use this option with caution.
    ignoreBuildErrors: true,
  },

  // You can add other Next.js configuration options here if needed
  // For example:
  // reactStrictMode: true,
  // images: { domains: ['example.com'] },
};

export default nextConfig;
