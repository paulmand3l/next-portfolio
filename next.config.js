/** @type {import('next').NextConfig} */
const withStylus = require('next-stylus');

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withStylus(nextConfig)
