const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === "production";

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    disable: prod ? false : true,
    dest: "public",
  },
  experimental: {
    modern: true,
    reactMode: "concurrent",
    polyfillsOptimization: true,
  },
});
