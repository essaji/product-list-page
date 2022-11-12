/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    API_HOST: process.env.API_HOST,
    IMAGE_HOST: process.env.IMAGE_HOST_URL,
    API_KEY: process.env.API_KEY
  }
}

module.exports = nextConfig
