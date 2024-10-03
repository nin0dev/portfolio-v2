const withYaml = require('next-plugin-yaml');

/** @type {import("next").NextConfig} */
const nextConfig = {};

module.exports = withYaml({
  ...nextConfig,
});
