/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, options) => {
    config.resolve.fallback = {
      fs: false,
    };

    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader', 

      output: 'standalone', // Feel free to modify/remove this option
    
      // Indicate that these packages should not be bundled by webpack
      experimental: {
          serverComponentsExternalPackages: ['sharp', 'onnxruntime-node'],
      },
    });

    
    return config;
  },
};
