const react = require('react');
const viteTsconfigPaths = require('vite-tsconfig-paths').viteTsconfigPaths;
const svgrPlugin = require('vite-plugin-svgr');

module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config: any, { isServer }: any) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    }
    return config;
  },
  vite: {
    plugins: [viteTsconfigPaths(), svgrPlugin()],
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
  },
};
