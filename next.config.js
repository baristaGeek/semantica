/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, options) => {
    config.resolve.fallback = {
      fs: false,
    };

    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader', 
    });

    return config;
  },
};
