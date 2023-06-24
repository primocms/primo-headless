/** @type {import('@sveltejs/kit').Load} */
export async function load() {
  const primo_site = await fetch('https://theme-blog-chi.vercel.app/primo.json').then((res) => res.json());
  return primo_site
}