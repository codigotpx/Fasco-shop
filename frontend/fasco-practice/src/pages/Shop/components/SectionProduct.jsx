import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import './SectionProduct.css'
import Button from '../../../components/Buttons/Button.jsx'
import CalculateArrivalTime from '../../../components/CalculateArrivalTime.jsx'
import googlePay from '../../../assets/Google_Pay_Logo.png'
import amers from '../../../assets/amers.png'
import mastercard from '../../../assets/mastercard.png'
import visa from '../../../assets/visa.png'
import SectionDeals from '../../Home/components/SectionDeals.jsx'
import SubscribeSection from '../../Home/components/SubscribeSection.jsx'
import CartDrawer from './CartDrawer.jsx'
import { useCart } from './CartContext.jsx'

const SectionProduct = () => {

    const { id } = useParams()
    const [ product, setProduct ] = useState(null)
    const [ isSelect, setIsSelect ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ size, setSize ] = useState("M")
    const [ addProduct, setAddProduct ] = useState(0)

    const { isCartOpen, setIsCartOpen, cart, setCart } = useCart()

    const sizes =  [ "M" ,"L", "XL", "XXL"]

    useEffect( () =>  {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(setProduct)
            .finally(() => setLoading(false))
    }, [id])

    const handleAddProduct = (rev, add) => {

        if (add && addProduct < product.stock) {
            setAddProduct(addProduct + 1)
        }

        if (rev && addProduct > 0) {
            setAddProduct(addProduct - 1)
        } 
        
    }
    
    console.log(product)

    const addCartProduct = ( product ) => {
        const existingProduct = cart.find(item => item.id === product.id)

        if (addProduct === 0) {
            alert('You should add at least one product')
            return
        }

        if (existingProduct) {
            const updatedProduct = cart.map(item => 
                item.id === product.id ?
                    {...item, quantity: addProduct + item.quantity } :
                    item
            )

            setCart(updatedProduct)
            setIsCartOpen(true)
        } else {
            const productCart = {
                ...product,
                quantity: addProduct
            }
            setCart([...cart, productCart])
        }  
    }

    if (loading) return <p>Loading...</p>
    if (!product) return <p>Product not found</p>


    const imagesProduct = [...product.images]

    const percentage = `${(product.rating / 5) * 100}%`

    const realPrice = `$${Math.ceil(product.price / (1 - (product.discountPercentage / 100)))}.00`

    const save = `${Math.ceil(product.discountPercentage)}%`

    const linePercentage = `${product.stock}%`

    return (
        <div className='main-container-product'>
            {/**Cart drawer  */}

            <CartDrawer 
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cart}
            />  

            <section className='section-container-product'>
                {/*contianer of photo and photos to ptroduct */}
                <div className="container-images">
                    {/**carrusel of images about the product */}
                    <div className='container-product-carousel'>
                        {imagesProduct.map((img) => (
                            <img 
                            key={img} 
                            src={img} 
                            onClick={() => setIsSelect(img)}
                            alt="" 
                            className="image-carousel"
                            />
                        ))}
                    </div>
                    {/*image selected */}
                    <img className="main-image" src={isSelect === null ? imagesProduct[0] : isSelect} alt="" />
                </div>
                {/*Container of content about products */}
                <div className="contianer-details-product">
                    <h6>FASCO</h6>
                    <h3 className="title-product">{product.title}</h3>
                    {/**Contianer to rating of each product */}
                    <div className="rating-wrapper">
                        <div className="stars-outer">
                            <div className="stars-inner" style={{'--rating' : percentage}} >
                            </div>
                        </div>
                    </div>
                    
                    <div className='price-content'>
                        <p className="p-price">${product.price}</p>
                        <p className='p-real-price'>{realPrice}</p>
                        <p className='p-save-money'>SAVE {save}</p>
                    </div>

                    {/*Container stock */}
                    <div>
                        <p className='p-stock'>{`Only ${product.stock} item(s) left in stock!`}</p>
                        <div className='line-outer'>
                            <div className='line-inner' style={{"--var-line" : linePercentage}}>

                            </div>
                        </div>
                    </div>

                    {/**contianer sizes */}
                    <div>
                        <h5>{`Size: ${size}`}</h5>
                        {sizes.map(s => (
                            <button 
                            key={s} 
                            className={s !== size ? 'button-sizes' : 'button-sizes-active'}
                            onClick={() => setSize(s)}
                            >{s}</button>
                        ))}
                    </div>
                    {/**Container quantity */}
                    <div className='container-quantity'>
                        <div className='container-button-add-remove'>
                            <button onClick={() => handleAddProduct(true, false)}
                                className='button-add-remove-product'>
                            -
                            </button>
                                <span className='span-count'>
                                        {addProduct}
                                </span>
                            <button onClick={() => handleAddProduct(false, true)}
                                className='button-add-remove-product'
                                >
                                +
                            </button>
                        </div>

                        <Button 
                            onClick={() => addCartProduct(product)}
                            variant='add-to-cart' 
                            > 
                            Addd to cart 
                        </Button>

                    </div>

                    {/**Container aditional info and share */}

                    <div className='container-share'>
                        <p className="p-ask-a-question"><img width={17} src="/circle-question-regular-full.svg" />Ask a questions</p>
                        <p className="p-ask-a-question"><img width={17} src="/share-nodes-solid-full.svg" />Share</p>
                    </div>

                    <div>
                        <p className='p-delivery'><img src="/delivery.svg" alt="" /><span>Estimated Delivery: </span> <CalculateArrivalTime/> </p>
                         <p className='p-delivery'><img src="/free-shipping.svg" alt="" /><span>Free Shipping & Returns: </span>On all orders over $75</p>
                    </div>

                    {/**Contianer pay methods */}
                    <div className='container-about-pays'>
                        <div className='container-logos-pay'>
                            <img className='logo-pay-methods' src={visa} alt="" />
                            <img className='logo-pay-methods' src={mastercard} alt="" />
                            <img className='logo-pay-methods' src={googlePay} alt="" />
                            <img className='logo-pay-methods' src={amers} alt="" />
                        </div>
                        <p>Guarantee safe & secure checkout</p>
                    </div>
                </div>
            </section> 
            <SectionDeals/>
            <SubscribeSection/>
        </div>
    )
}

export default SectionProduct