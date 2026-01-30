import './SectionDeals.css'
import { Link } from 'react-router'
import  CountDown from '../../../components/Accountant/CountDown.jsx'
import DealsSlider from '../../../components/Slider/DealsSlider.jsx'
import imageDeals from '../../../assets/img-deals.png'
import imageDeals2 from '../../../assets/image-deals-2.png'
import imageDeals3 from '../../../assets/img-deals-3.png'

const SectionDeals = () => {
    const myphotos = [
        { url: imageDeals , alt: "photo of deals clothes"},
        { url: imageDeals2 , alt: "photo of deals clothes" },
        { url: imageDeals3, alt: "photo of deals clothes" }
    ]

    return (
        <>
            <section id='section-deals' className="deals-container">
                
                <div className='deals-timer-container'>
                    <h2 className='text-deals-of-the-month'>Deals Of The Month</h2>
                    <p className='text-coment-deals'>Stop scrolling and start saving. This is where high fashion meets low prices.
                         From must-have basics to statement pieces, we’ve gathered all our best markdowns in one place. 
                         These styles move fast—and once they’re gone, they’re gone for good. Refresh your wardrobe without breaking the bank!.
                    </p>

                    <Link to='/shop' className='link-buy-now-deals' variant="primary">
                                Buy Now
                            </Link>
                    <section className='section-counter-container'>
                        <p className='text-counter-container' >Hurry, Before it's Too Late!</p>
                        <CountDown targetDate="2026-12-01T00:00:00" />
                    </section>
                </div>

                <div className='deals-clothes-container'>
                    <DealsSlider photos={myphotos}/>
                </div>
            </section>
        </>
    )
}

export default SectionDeals