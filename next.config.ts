/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['your-domain.com'], // If using external images
  },
  // For Next.js 13+ with app router
  experimental: {
    appDir: true,
  },
  // If your site is not hosted at the root
  basePath: '/portfolio', // if your site is at example.com/portfolio
}

module.exports = nextConfig