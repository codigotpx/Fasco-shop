
import { Link } from 'react-router'
import './NavbarShop.css'
import { useLocation } from 'react-router'
import { useNavbar } from '../../../context/NavbarContext'
import { useState } from 'react'
import AccountSection from '../../../components/AccountSection.jsx'

const NavbarShop = () => {
    const Location = useLocation()
    const { setIsCartOpen, cart, isUserOpen, setIsUserOpen } = useNavbar()
    const [ isMobile, setIsMobile ] = useState(false)

    

    
    return (
        <div className='navbar-shop-container'>
            <nav className='navbar'>
                <ul className={`navbar-links ${isMobile ? 'active' : ''}`}>
                    <li className='li-navbar' ><Link to='/'>Home</Link></li>
                    <li className={Location.pathname.startsWith('/shop') ? 'li-navbar-active' : 'li-navbar'} ><Link to='/shop'
                    onClick={() => setIsMobile(false)}>Shop</Link></li>
                    <li className={Location.pathname.includes('/product') ? 'li-navbar-active' : 'li-navbar'} ><Link to='#'>Products</Link></li>
                    <li className='li-navbar' ><Link to='#'>Pages</Link></li>
                </ul>
                <ul className='navbar-ul-option'>
                    <li><button className='buttom-navbar-option'><img className='img-navbar-option' src="/search.svg" alt="" /></button></li>
                    <li><button className='buttom-navbar-option' onClick={() => setIsUserOpen(!isUserOpen)}>
                        <img className='img-navbar-option' src="/account.svg" alt="" />
                        </button></li>
                    <li><button className='buttom-navbar-option'><img className='img-navbar-option' src="/wishlist.svg" alt="" /></button></li>
                    <li><button 
                            onClick={() => setIsCartOpen(true)}
                            className='buttom-navbar-option-cart'><img className='img-navbar-option' src="/icon-shopping-car.svg" 
                            alt="icon of button to search especific products" />
                            {cart.length !== 0 ? <span className='span-to-number-cart' >{`${cart.length}`}</span> : ''}
                        </button>
                    </li>
                    {isUserOpen? <AccountSection/> : ''}
                    
                </ul>

                <div className={`hamburguer ${isMobile ? 'active' : ''}`} id='hamburguer'
                    onClick={() => setIsMobile(!isMobile)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
        
    )
}

export default NavbarShop;