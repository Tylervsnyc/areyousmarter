/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic settings only
  reactStrictMode: false,
  
  // Simplified image config
  images: {
    unoptimized: true,
    domains: [],
  },

  // Disable features that might cause issues
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig 