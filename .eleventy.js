module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "profile/src/css": "css"
  });

  return {
    dir: {
      input: "profile/src",
      output: "docs",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
