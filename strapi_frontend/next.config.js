/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: 'default',
    domains: ['127.0.0.1'],
  },
}

module.exports = nextConfig
