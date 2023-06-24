# Primo headless

This repo demonstrates how you can consume a Primo site's data from SvelteKit (or a similar framework). 

In this case, it's used to list blog posts and render individual blog posts. The content is server-side rendered or can be statically rendered from SvetleKit. 

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## How it works
* [`/routes/+layout.js`](https://github.com/mateomorris/primo-headless/blob/master/src/routes/%2Blayout.js) fetches the Primo site object 
* [`/routes/+page.svelte`](https://github.com/mateomorris/primo-headless/blob/master/src/routes/%2Bpage.svelte) accesses the site object to list the blog posts
* [`/routes/blog/post/+pages.svelte`](https://github.com/mateomorris/primo-headless/blob/master/src/routes/blog/%5Bpost%5D/%2Bpage.svelte) accesses the site object to pull out the blog post title, image, and body

