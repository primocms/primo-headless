<script>
	import { page } from '$app/stores';
	const post_url = $page.params.post;

	export let data;

	const blog_page = data.pages.find((page) => page.url === post_url); // find the current page using the 'post' param
	const blog_page_sections = data.sections.filter((section) => section.page === blog_page.id); // find the sections that belong to the current page

	// Build the blog post object
	const post_header = blog_page_sections.find(
		(section) => section.symbol === '6cbdde3a-a244-468c-a876-ca79f64e08f7' // find the section with the header symbol
	).content.en;

	const post_body = blog_page_sections.find(
		(section) => section.symbol === '6eea04bb-ebf8-4f91-b3d7-ff76fb5bb57a' // find the section with the body symbol
	).content.en;

	console.log({ post_header, post_body });
</script>

<main class="container">
	<h1>{post_header.heading}</h1>
	<img src={post_header.image.url} alt={post_header.image.alt} />
	<div>{@html post_body.content.html}</div>
</main>

<style>
	h1 {
		font-size: 3rem;
	}
	img {
		margin-bottom: 3rem;
	}
</style>
