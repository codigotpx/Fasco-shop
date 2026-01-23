import './Shop.css';
import FilterProducts from './components/FilterProducts';
import Products from '../Products/Products.jsx'
import SubscribeSection from '../../pages/Home/components/SubscribeSection.jsx'
import { useNavbar } from '../../context/NavbarContext.jsx'
import CartDrawer from './components/CartDrawer.jsx';
import { useState } from 'react';

const Shop = () => {

    const { isCartOpen, setIsCartOpen, cart} = useNavbar()
    const [ isOnfilter, SetIsOnFilter ] = useState(false)

 return (
    <section className="section-shop-container">
        <h2>Fashion</h2>
        <div className='contianer-filter-mobile'>
            <p>Sorted by: recommendations</p> 
            <div className='by-filter'
                onClick={() => SetIsOnFilter(!isOnfilter)}>
                <img src="/sorting_left_icon_227394.svg" alt="" /> 
                <span>
                    Filters
                </span>
            </div>
        </div>
        <CartDrawer 
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cart}
            />
        <div className='container-content'>
            <FilterProducts 
            isOnfilter={isOnfilter} 
            isOffFilter={() => SetIsOnFilter(false)}
            />
            <div className='container-products'>
                <Products />
            </div>
        </div>  
        <SubscribeSection />
    </section>
 )
}

export default Shop;