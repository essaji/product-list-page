/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    API_HOST: process.env.API_HOST,
    IMAGE_HOST: process.env.IMAGE_HOST_URL,
    API_KEY: process.env.API_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/w500/**',
      },
      { protocol: 'https', hostname: 'placehold.jp', pathname: "/**" }
    ],
  }
}

module.exports = nextConfig
