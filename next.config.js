/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL : 'http://localhost:3000',
  },
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/public/robots.txt'
      },
      {
        source: '/sitemap.xml',
        destination: '/public/sitemap.xml'
      }
    ];
  }
}

module.exports = nextConfig
