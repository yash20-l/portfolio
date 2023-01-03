/** @type {import('next').NextConfig} */
const nextConfig = {
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
