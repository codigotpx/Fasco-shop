import ProductsCard from "../ProductsCard/ProductsCard"
import './ProductsGrid.css'

const ProductsGrid = ({ products = [] }) => {
    return (
        <section className="products-grid">
            {products.map(product => (
                <ProductsCard key={product.id} product={product}></ProductsCard>
            ))}
        </section>
    )
}

export default ProductsGrid