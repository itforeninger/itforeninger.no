/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  compiler: {
    reactRemoveProperties: true,
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
