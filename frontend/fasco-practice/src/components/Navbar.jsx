import '../styles/Navbar.css';
import Button from './Buttons/Button.jsx'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <ul className='navbar-links'>
                    <li><a href='#secction-hero'>Home</a></li>
                    <li><a href='#secction-deals'>Deals</a></li>
                    <li><a href='#secction-new-arrivals'>New Arrivals</a></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/register'>sign in</Link></li>
                </ul>
                <Button variant="primary">Sign Up</Button>
            </nav>
        </div>
        
    )
}

export default Navbar;