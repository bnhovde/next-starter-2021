module.exports = {
  "stories": [
    "/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  addons: ["@storybook/addon-links", {
    name: '@storybook/addon-essentials',
    options: {
      actions: false,
    }
  }],
  webpackFinal: async (config, { configType }) => {

    // Make basePath work for storybook
    config.resolve.modules.push(process.cwd());

    // get index of css rule
    const ruleCssIndex = config.module.rules.findIndex(rule => rule.test.toString() === '/\\.css$/');

    // map over the 'use' array of the css rule and set the 'module' option to true
    config.module.rules[ruleCssIndex].use.map(item => {
      if (item.loader && item.loader.includes('/css-loader/')) {
        item.options.modules = {
          mode: 'local',
          localIdentName: configType === 'PRODUCTION' ? '[local]--[hash:base64:5]' : '[name]__[local]--[hash:base64:5]',
        };
      }
      return item;
    })

    // Return the altered config
    return config;
  }
}