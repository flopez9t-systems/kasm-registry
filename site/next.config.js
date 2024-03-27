/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Fran',
    description: 'Test workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://flopez9.github.io/kasm-registry/',
    contactUrl: https://github.com/flopez9t-systems/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
