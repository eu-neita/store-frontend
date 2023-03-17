const URL_CATE = 'https://api.mercadolibre.com/sites/MLB/categories';

export async function getCategories() {
  const response = await fetch(URL_CATE);
  const data = await response.json();
  return data;
}

// const URL_PROD_SRC = 'https://api.mercadolibre.com/sites/MLB/search?category=MLB5672';

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = await response.json();
  return data;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
//   const response = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
//   const data = await response.json();
//   return data;
}
