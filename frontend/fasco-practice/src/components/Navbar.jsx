import '../styles/Navbar.css';
import { Link } from 'react-router'
import { useState, useEffect} from 'react';
import { useAuth } from "../context/AuthContext.jsx"
import AccountSection from './AccountSection.jsx';
import { useNavbar } from '../context/NavbarContext.jsx';

const Navbar = () => {

    const { user } = useAuth()
    const sections = ["Home", "Deals", "New Arrivals"];
    const { isUserOpen, setIsUserOpen } = useNavbar()
    
    const [ activeSection, setActiveSection ] = useState("Home");
    const [ isMenu, setIsMenu ] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })   
        },
        {
            threshold: 0.5,
            rootMargin: '-100px 0px -100px 0px'
        }

        )

        sections.forEach(id => {
            const el = document.getElementById(`section-${id.toLowerCase().replace(' ', '-')}`);
            if(el) {
                observer.observe(el)
            } 
        })

        return () => observer.disconnect()
    }, [])

   
    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <ul className={`navbar-links ${isMenu ? 'active' : ''}`}  id="navMenu">
                    {sections.map((section) => (
                        <li key={section} className={activeSection === `section-${section.toLocaleLowerCase().replace(' ', '-')}` ? 'li-navbar-active' : 'li-navbar'}>
                            <a href={section === "Home" ? '/' : `#section-${section.toLowerCase().replace(' ', '-')}`} 
                                onClick={() => setIsMenu(false)}
                            >{section}</a>
                        </li>
                    ))}
                    
                    <li className='li-navbar'>
                        <Link className='li-link' to="/shop">Shop</Link>
                    </li>

                    {user? 
                        <div className='container-acocount-home' onClick={() => setIsUserOpen(!isUserOpen)}>
                            <img className='img-login-logout' width={15} src='/account.svg'/>
                            {user.name} {user.lasname}

                            <div>
                                <AccountSection/>
                            </div>
                        </div>
                    :
                        <div className='container-login-logout'>
                            <li className='li-navbar'>
                                <Link className='li-link' to="/login">Sign in</Link>
                            </li>

                            <Link to="/register" className='link-buy-now'>Sign up</Link>  
                        </div>
                    }
                   
                     
                </ul>

                <div className={`hamburguer ${isMenu ? 'active' : ''}`} id='hamburguer'
                onClick={() => setIsMenu(!isMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
            </nav>
        </div>
        
    )
}

export default Navbar;