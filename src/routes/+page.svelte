<script>
	export let data;

	const blog_posts = data.pages.filter(
		(page) => page.parent === '542b8051-0936-4be1-aadd-c3931cfbe654' // find the pages that belong to the blog
	);
</script>

<ul class="container">
	{#each blog_posts as post}
		<li>
			<a href="/blog/{post.url}">{post.name}</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		padding-block: 3rem;
		display: grid;
		gap: 0.5rem;
	}
</style>
