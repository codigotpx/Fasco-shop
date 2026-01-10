
import { Link } from 'react-router'
import './NavbarShop.css'

const NavbarShop = () => {
    return (
        <div className='navbar-shop-container'>
            <nav className='navbar'>
                <ul className='navbar-links'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='#'>Shop</Link></li>
                    <li><Link to='#'>Products</Link></li>
                    <li><Link to='#'>Pages</Link></li>
                </ul>
                <ul className='navbar-ul-option'>
                    <li><button className='buttom-navbar-option'><img className='img-navbar-option' src="/search.svg" alt="" /></button></li>
                    <li><button className='buttom-navbar-option'><img className='img-navbar-option' src="/account.svg" alt="" /></button></li>
                    <li><button className='buttom-navbar-option'><img className='img-navbar-option' src="/wishlist.svg" alt="" /></button></li>
                    <li><button className='buttom-navbar-option'><img className='img-navbar-option' src="/icon-shopping-car.svg" alt="icon of button to search especific products" /></button></li>
                </ul>
            </nav>
        </div>
        
    )
}

export default NavbarShop;