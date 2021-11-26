module.exports = function(eleventyConfig) {
  // tell eleventy what files to push to /public
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/products');

  // set up directories
  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  };
}