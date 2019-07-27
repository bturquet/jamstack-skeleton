[![Netlify Status](https://api.netlify.com/api/v1/badges/c8cb0999-20ae-4eac-865a-771fc21b845b/deploy-status)](https://app.netlify.com/sites/eleventy-skeleton-btt/deploys)

# JAMstack Skeleton

A skeleton boilerplate built with Eleventy and Materializecss, linked to Netlify CMS and deployed on Netlify.

## Features

- A simple, elegant blog
- Updates UI with Netlify CMS
- Continuous deployment with Netlify

## Requirements

Node `>=` v8.9.0

## Installation

```
npm install
```

`cd` into your project folder and type the `npm run dev` command into terminal, to start the development server. Eleventy has baked in hot reloading and will files for changes.

## Folder Structure

The `views_source` folder contains all the templates, pages and content, which Eleventy will watch and parse into HTML for us.

Within this, lives a `globals` folder, where you'll find a `site.json` file - for general site config stuff e.g name, author, email, social media...etc.

A `navigation.json` to generate our nav.

Static ressources folders as `css`, `images` and `js`.

## Customization

Use the `views_source` \ `posts` folder and add a post by simply creating a Markdow.

Or thanks to the Netlify CMS just go the `/admin` URL and create a new Post (need to be identified).

## Ready to deploy?

Type the `npm run build` command to minify scripts, styles and run Purgecss.

Feel free to adapt this as you wish! Go build some cool stuff and put it on Netlify !

## Deploy to Netlify

[Netlify](https://www.netlify.com/)

## Next Features in progress

* PERFS | purge the CSS and recompile it by using gulp
* PERFS | html minifier
* UI/UX | preview template in the Netlify CMS