module.exports = function(eleventyConfig) {
  return {
    templateFormats: ["html", "njk", "md"],

    htmlTemplateEngine: "njk",  // <-- Això fa que els .html s'executin amb Nunjucks

    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    }
  };
};
