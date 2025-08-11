/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js\.map$/,
      use: ['source-map-loader'],
      enforce: 'pre',
    });
    return config;
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;