/** @type {import("next").NextConfig} */
const nextConfig = {};

module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    });
    cfg.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });
    return cfg;
  },
  ...nextConfig,
};
