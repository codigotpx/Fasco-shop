const CLOTHING_CATEGORIES = [
  "mens-shirts",
  "mens-shoes",
  "womens-shoes",
  "tops",
  "womens-bags",
  "womens-jewellery",
  "mens-watches",
  "womens-watches"
]

export const getProducts = async () => {
  const requests = CLOTHING_CATEGORIES.map(category =>
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
  )

  const responses = await Promise.all(requests)

  // unir todos los arrays en uno solo
  return responses.flatMap(r => r.products)
}
