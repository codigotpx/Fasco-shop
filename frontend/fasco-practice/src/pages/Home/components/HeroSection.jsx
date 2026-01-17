import photo1 from '../../../assets/photo1.png'
import photo2 from '../../../assets/photo2.png'
import photo3 from '../../../assets/photo3.png'
import photo4 from '../../../assets/photo4.png'
import './HeroSection.css'
import { Link } from 'react-router'
import logoChanel from '../../../assets/logo-chanel.png'
import logoCalvinKlein from '../../../assets/logo-calvin-klein.png'
import logoDenim from '../../../assets/logo-denim.png'
import logoPrada from '../../../assets/logo-prada.png'
import logoLouisVuitton from '../../../assets/logo-louis-vuitton.png'
import LogoSlider from '../../../components/Slider/logoSlider.jsx'

const HeroSection = () => {

    const misLogos = [
            { url: logoChanel, alt: 'Logo Chanel' },
            { url: logoCalvinKlein, alt: 'Logo Calvin Klein' },
            { url: logoDenim, alt: 'Logo Denim' },
            { url: logoPrada, alt: 'Logo Prada' },
            { url: logoLouisVuitton, alt: 'Logo Louis Vuitton' },
        ]
    
    return (
            <>
                 <section id='section-home' className='first-home-container'>
                    <div className='section-1'>
                        <div className='image-container' >
                            <img className='photo1' src= { photo1 } alt="Placeholder" />
                        </div>
                    </div>
                    <div className='section-2'>
                        <div className='image-container' >
                            <img className='photo3' src= { photo3 } alt="Placeholder" />
                        </div>
                    </div>
                    <div className='section-3'>
                        <div className='image-container' >
                            <img className='photo4' src= { photo4 } alt="Placeholder" />
                        </div>
                    </div>
                    <div className='section-4'>
                        { /* Here a text */}
                        <div className='content-center-home'>
                            <p className='text-container'>
                            <span className='text-home'>
                                ULTIMATE
                            </span>
                            <span className='text-SALE'> 
                                SALE
                            </span>
                            <span className='text-new-collection'>
                                NEW COLLECTION
                            </span>
                            </p>

                            <Link to='/shop' className='link-buy-now' variant="primary">
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                    <div className='section-5'>
                        <div className='image-container' >
                            <img className='photo2' src= { photo2 } alt="Placeholder" />
                        </div>
                    </div>
                </section>
                <section className='fornecedores-container'>
                    <LogoSlider logos={ misLogos } />
                </section>
            </>
    )
}

export default HeroSection