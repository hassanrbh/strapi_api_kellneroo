/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  test: /\.svg$/,
  use: ['@svgr/webpack'],
  images: {
    loader: 'default',
    domains: ['localhost:1337'],
  },
}

module.exports = nextConfig
