/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['your-domain.com'],
  },
  experimental: {
    appDir: true,
  },
  basePath: '/portfolio',
}

module.exports = nextConfig