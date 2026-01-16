import './CartDrawer.css'
import { useCart } from './CartContext.jsx' // Importamos el contexto
import Button from '../../../components/Buttons/Button.jsx'

const CartDrawer = ({ isOpen, onClose, items }) => {
    const { setCart } = useCart() // Obtenemos la función para actualizar el carrito
    const moneyFreeShipping = 100

    // CÁLCULO CORRECTO DEL TOTAL
    const totalInCart = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    const remainingMoney = Math.ceil(moneyFreeShipping - totalInCart)

    // FUNCIÓN PARA ACTUALIZAR CANTIDAD
    const updateQuantity = (id, delta) => {
        const itemUpdate = items.find(item => item.id === id)
        const nextQuantity = itemUpdate.quantity + delta

        if (nextQuantity < 1) {
            const confimed = window.confirm("Do you want to remove this product from your cart?")

            if(confimed) {
                const filterCart = items.filter(item => item.id !== id)
                setCart(filterCart)
            }
        } else{
            const updateItem = items.map(item => item.id === id ? 
                {...item, quantity: nextQuantity} : item
            )

            setCart(updateItem)
        }

    }

    return (
        <div className={isOpen ? 'cart-drawer-open' : 'cart-drawer-close'} id="card-drawer">
            <div className='container-header-cart'>
                <h2>Shopping Cart</h2>
                <button className='button-cart' onClick={onClose}>
                    <img src="/xmark-solid-full.svg" width={20} alt="" />
                </button>
            </div>

            <p>
                Buy <span className='span-cart'>{remainingMoney > 0 ? `$${remainingMoney}` : '$0'}</span> 
                More And Get <span className='span-cart'> Free Shipping</span>
            </p>
            <div className='contianer-product-cart'>
                {items.map(item => (
                    <div key={item.id} className='product-in-cart'>
                        <img className='image-item' src={item.images[0]} alt={item.title} />
                        <div className='about-items'>
                            <h4>{item.title}</h4>
                            <p>{`$${item.price}`}</p>
                            
                            <div className='container-button-add-remove-cart'>
                                {/* BOTÓN RESTAR */}
                                <button 
                                    onClick={() => updateQuantity(item.id, -1)}
                                    className='button-add-remove-product-cart'>
                                    -
                                </button>

                                <span className='span-count-cart'>
                                    {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
                                </span>

                                {/* BOTÓN SUMAR */}
                                <button 
                                    onClick={() => updateQuantity(item.id, 1)}
                                    className='button-add-remove-product-cart'>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            

            {/**Container checkout */}
            <div className='contianer-footer-cart'>
                <div className='total-price'>
                    <h4>Subtotal</h4>
                    <h4>{`$${totalInCart}`}</h4>
                </div>
                <Button className='variant-primary'>Checkout</Button>
            </div>
        </div>
    )
}

export default CartDrawer