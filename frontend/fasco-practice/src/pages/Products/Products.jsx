import { useState, useEffect } from "react"
import { getProducts } from "../../services/productsService.js"
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.jsx"
import Button from '../../components/Buttons/Button.jsx'

const Products = () => {

  const CLOTHING_CATEGORIES = [
    "mens-shirts",
    "mens-shoes",
    "womens-dresses",
    "womens-shoes",
    "tops",
    "womens-bags",
    "womens-jewellery",
    "mens-watches",
    "womens-watches"
  ]


    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState("")
    const [ visibleCount, setVisibleCount ] = useState(6)

    useEffect(() => {
      getProducts()
        .then(setProducts)
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    const handleMore = () => {
      setVisibleCount(prev => prev + 6)
    }


    if (loading) return <p>Loading products...</p>
    if (error) return <p>{error}</p>

    return (
      <section className="container-product">

        <ProductsGrid products={products.slice(0, visibleCount)}/>

        {visibleCount < products.length && (
            <div className="load-more-wrapper">
                <Button onClick={handleMore} variant="load-more">View New</Button>
            </div>
        )}

      </section>
    )
}

export default Products