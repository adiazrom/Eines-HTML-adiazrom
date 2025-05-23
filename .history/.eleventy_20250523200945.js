module.exports = function(eleventyConfig) {
  return {
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    }
  };
};
