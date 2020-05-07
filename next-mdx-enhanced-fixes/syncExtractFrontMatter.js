const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const { generateFrontmatterPath } = require('next-mdx-enhanced/util');
const matter = require('gray-matter');
const debug = require('debug')('next-mdx-enhanced');

function extendFrontMatter({
  content,
  frontMatter,
  phase,
  extendFm
} = {}) {
  if (!extendFm || !extendFm.process) return {}
  if (extendFm.phase !== 'both' && extendFm.phase !== phase) return {}
  return extendFm.process(content, frontMatter)
}

// Given an array of absolute file paths, write out the front matter to a json file
module.exports = function extractFrontMatter(pluginOptions, files, root) {
  debug('start: read all mdx files')
  const fileContents = files.map(f => fs.readFileSync(f, 'utf8'))
  debug('finish: read all mdx files')
  const fmPaths = files.map(f => generateFrontmatterPath(f, root))
  debug('start: frontmatter extensions')
  const frontMatter = fileContents.map((content, idx) => {
      const __resourcePath = files[idx]
        .replace(path.join(root, 'pages'), '')
        .substring(1)

      const { data } = matter(content, {
        safeLoad: true,
        filename: files[idx]
      })

      const extendedFm = extendFrontMatter({
        content,
        frontMatter: {
          ...data,
          __resourcePath
        },
        phase: 'prebuild',
        extendFm: pluginOptions.extendFrontMatter
      })

      return {
        ...data,
        ...extendedFm,
        __resourcePath
      }
    })
  debug('finish: frontmatter extensions')
  debug('start: .mdx-data creation')
  fmPaths.map(fmPath => fsExtra.ensureDirSync(path.dirname(fmPath)))
  debug('finish: .mdx-data creation')
  debug('start: write data files')
  const results = frontMatter.map(async (content, idx) => (
    fs.writeFileSync(fmPaths[idx], JSON.stringify(content))
  ));
  return results;
}
