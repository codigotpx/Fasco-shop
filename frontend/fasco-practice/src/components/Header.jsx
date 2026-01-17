import { useLocation } from 'react-router'
import Navbar from './Navbar'
import NavbarShop from '../pages/Shop/components/NavbarShop.jsx'
import { useState, useEffect } from 'react'
import '../styles/Header.css'
import { Link } from 'react-router'

const Header = () => {
    const Location = useLocation()
    const [isHidden, setIsHidden] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Detectar si es móvil
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768) // Puedes ajustar este breakpoint
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    useEffect(() => {
        // Solo aplicar el comportamiento de scroll si NO es móvil
        if (isMobile) return

        const controlNavbar = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setIsHidden(true)
            } else {
                setIsHidden(false)
            }

            setLastScrollY(window.scrollY)
        }

        window.addEventListener('scroll', controlNavbar)

        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lastScrollY, isMobile])

    return (
        <header className={`header-site ${!isMobile && isHidden ? 'header--hidden' : ''} ${!isMobile && isScrolled ? 'header--scrolled' : ''}`}>
            <Link to="/"><h1 className='logo'>FASCO</h1></Link>
            {Location.pathname.includes('/shop') ? <NavbarShop/> : <Navbar/>}
        </header>
    )
}

export default Header