import './Shop.css';
import FilterProducts from './components/FilterProducts';
import Products from '../Products/Products.jsx'
import SubscribeSection from '../../pages/Home/components/SubscribeSection.jsx'
import { useCart } from './components/CartContext.jsx';
import CartDrawer from './components/CartDrawer.jsx';

const Shop = () => {

    const { isCartOpen, setIsCartOpen, cart} = useCart()
 return (
    <section className="section-shop-container">
        <h2>Fashion</h2>
        <CartDrawer 
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cart}
            /> 
        <div className='container-content'>
            <FilterProducts />
            <div className='container-products'>
                <Products />
            </div>
        </div>  
        <SubscribeSection />
    </section>
 )
}

export default Shop;