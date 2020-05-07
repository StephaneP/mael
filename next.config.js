const readingTime = require('reading-time')
const mdxPrism = require('mdx-prism')
const withMdxEnhanced = require('next-mdx-enhanced')
const PrebuildWebpackPlugin = require('prebuild-webpack-plugin')
const syncExtractFrontMatter = require('./next-mdx-enhanced-fixes/syncExtractFrontMatter')

const mdxOptions = {
  layoutPath: 'layouts',
  defaultLayout: true,
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-slug'),
    require('remark-code-titles'),
  ],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {
      return ({
        wordCount: mdxContent.split(/\s+/gu).length,
        readingTime: readingTime(mdxContent)
      })
    }
  }
}

module.exports = withMdxEnhanced(mdxOptions)({
  webpack: (config) => {
    const pluginOptions = config.module.rules.map((r) => r.use).reduce((acc, ar) => acc.concat(ar), []).find((use) => use && use.options && use.options.mdxEnhancedPluginOptions);
    config.plugins = config.plugins.map((p) => {
      if (p instanceof PrebuildWebpackPlugin) {
        p.build = (_, compilation, files) => {
          return syncExtractFrontMatter({...mdxOptions, ...pluginOptions}, files, compilation.context);
        };
      }
      return p;
    })
    return config;
  }
});