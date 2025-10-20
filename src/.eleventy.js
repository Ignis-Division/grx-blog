export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");
  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" }
  };
}
