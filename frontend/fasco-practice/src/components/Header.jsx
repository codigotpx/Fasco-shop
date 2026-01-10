import '../styles/Header.css'
import { useLocation } from 'react-router'
import Navbar from './Navbar'
import NavbarShop from '../pages/Shop/components/NavbarShop.jsx'
import { useState, useEffect } from 'react'

const Header = () => {

    const Location = useLocation()

    const [ isHidden, setIsHidden ] = useState(false)
    const [ lasScrollY, setLasCrollY ] = useState(0)
    const [ isScrolled, setIsScrolled ] = useState(false)

    useEffect (() => {
        const controlNavbar = () => {
            
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }


            if (window.scrollY > lasScrollY && window.scrollY > 100) {
                setIsHidden(true)
            } else {
                setIsHidden(false)
            }

            setLasCrollY(window.scrollY)
        }

        window.addEventListener('scroll', controlNavbar)

        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lasScrollY])

    return (
        <header className={`header-site ${isHidden ? 'header--hidden' : ''} ${isScrolled ? 'header--scrolled' : ''}`}>
            <h1 className='logo'>FASCO</h1>
                {Location.pathname === '/shop' ? <NavbarShop/> : <Navbar/>}
        </header>
    )
}

export default Header