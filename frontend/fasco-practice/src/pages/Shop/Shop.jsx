import './Shop.css';
import FilterProducts from './components/FilterProducts';
import Products from '../Products/Products.jsx'
import SubscribeSection from '../../pages/Home/components/SubscribeSection.jsx'

const Shop = () => {
 return (
    <section className="section-shop-container">
        <h2>Fashion</h2>
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