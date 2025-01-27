// Cursor: Ensure local and production builds are identical
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  
  // Image optimization settings
  images: {
    unoptimized: false, // Enable image optimization
    domains: [], // Add any external image domains here
    remotePatterns: [], // Add any remote image patterns here
  },

  // Production build output configuration
  output: 'standalone',

  // Disable experimental features to ensure consistency
  experimental: {
    // Disable experimental features that might cause inconsistencies
    optimizeCss: false,
  },
}

module.exports = nextConfig 