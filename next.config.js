/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic settings only
  reactStrictMode: false,
  
  // Image optimization settings
  images: {
    unoptimized: false,
    domains: [],
    formats: ['image/webp']
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