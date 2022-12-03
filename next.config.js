/**
 * @type {import('next').NextConfig}
 */

const withPlugins = require("next-compose-plugins");

const nextConfig = {
  // distDir: '../../dist/functions/next'
  // images: {
  //   domains: ["pbs.twimg.com"],
  // },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "ar",
  },
  images: { unoptimized: true },
  // swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

// module.exports = withPlugins([], nextConfig);
module.exports = () => {
  const plugins = [];
  return plugins.reduce((acc, next) => next(acc), nextConfig);
};
