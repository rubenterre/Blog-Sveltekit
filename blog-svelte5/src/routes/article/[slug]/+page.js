import { articles } from '$lib/articles.js'; // o .json si usaste JSON

export function load({ params }) {
  const article = articles.find(a => a.slug === params.slug);
  
  if (article) {
    return { article };
  }
  
  throw error(404, 'Artículo no encontrado');
}