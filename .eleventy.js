const eleventySass = require('eleventy-sass');
// const htmlmin = require('html-minifier');
// const posthtml = require('posthtml');
// const uglify = require('posthtml-minify-classnames');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);

  // eleventyConfig.addTransform('htmlmin', async function(content, outputPath) {
  //   if (outputPath.endsWith('.html')) {
  //     const { html } = await posthtml().use(uglify()).process(content);

  //     let minified = htmlmin.minify(html, {
  //       useShortDoctype: true,
  //       removeComments: true,
  //       collapseWhitespace: true
  //     });
  //     return minified;
  //   }
  //   return content;
  // });

  eleventyConfig.addFilter('embeddableYoutubeLink', (link) => {
    return link.replace('watch?v=', 'embed/');
  });

  eleventyConfig.addFilter('replaceCommasWithWhitespaces', (list) => {
    return String(list).replaceAll(',', ' ');
  });

  eleventyConfig.addFilter('toUpper', (str) => {
    return str.toUpperCase();
  });

  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/scripts');

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};