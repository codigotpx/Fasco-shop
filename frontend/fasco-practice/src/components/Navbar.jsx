import '../styles/Navbar.css';
import Button from './Buttons/Button.jsx'
import { Link } from 'react-router'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const sections = ["Home", "Deals", "New Arrivals"];
    const pages = ["shop", "sign in"]
    
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
                    {pages.map((page) => (
                        <li key={page} className='li-navbar'>
                            <Link className='li-link' to={page === "sign in" ? '/login' : `/${page}`}>{page.charAt(0).toUpperCase() + page.slice(1)}</Link>
                        </li>
                    ))}

                    <Button variant="primary">Sign Up</Button>
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