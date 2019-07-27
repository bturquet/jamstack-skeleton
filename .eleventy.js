module.exports = eleventyConfig => {

  // Collections
   eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByTag('posts').reverse()
   }) 

   // Layout aliases
   eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')
   eleventyConfig.addLayoutAlias('page', 'layouts/page.njk')
   eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')

   // Include our static assets
   eleventyConfig.addPassthroughCopy("css")
   eleventyConfig.addPassthroughCopy("js")
   eleventyConfig.addPassthroughCopy("images")

    return {
      templateFormats: ["md", "njk"],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

      dir: {
        input: "views",
        output: "dist",
        includes: '_includes',
        data: 'globals'
      }
    }
  };