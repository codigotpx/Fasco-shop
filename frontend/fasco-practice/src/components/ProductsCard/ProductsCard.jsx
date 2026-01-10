import './ProductCard.css'

const ProductsCard = ({ product }) => {
    return (
        <article className='product-card'>
            <div className='container-image'>
                <img src={product.images[1]} 
                alt={product.title} 
                className="product-image"
                />
            </div>
            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className='product-reviews'>4.1k custom review</p>
                <p className="product-price">${product.price} </p>
            </div>
        </article>
    )
}

export default ProductsCard