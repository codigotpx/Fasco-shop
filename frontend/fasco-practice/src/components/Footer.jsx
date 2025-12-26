import '../styles/Footer.css'
import { Link } from 'react-router';

const Footer = () => {
    return (
        <>
            <section className="footer-container">
                <div className='footer-link-container'>
                    <h1 className="footer-logo-fasco"> FASCO</h1>
                    <ul className="footer-ul-container">
                        <li className="footer-li"><a href=""></a>Support Center</li>
                        <li className="footer-li"><a href=""></a>Invoicing</li>
                        <li className="footer-li"><a href=""></a>Contract</li>
                        <li className="footer-li"><a href=""></a>Carrers</li>
                        <li className="footer-li"><a href=""></a>Blog</li>
                        <li className="footer-li"><a href=""></a>FAQ,s</li>
                    </ul>
                </div>
                <p className="footer-copyright">Copyright © 2025. All Rights Reseved. Built by <Link className='footer-link-copyright'> 
                Camilo cer</Link> and designed by <Link className='footer-link-copyright'> hamza anza</Link></p>
            </section>
        </>
    )
}

export default Footer;