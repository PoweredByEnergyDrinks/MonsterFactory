module.exports = function(eleventyConfig) {
  // tell eleventy what files to push to /public
  eleventyConfig.addPassthroughCopy('./src/output.css');
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/products');
  eleventyConfig.addPassthroughCopy('./src/admin');

  // set up directories
  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  };
}