const API_URL = "https://api.escuelajs.co/api/v1/products"

export const getProducts = async () => {
    const res = await fetch(API_URL)

    if (!res.ok) {
        throw new Error("Error fetching products")
    }

    return res.json()
}