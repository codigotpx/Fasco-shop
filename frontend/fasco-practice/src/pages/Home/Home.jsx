import './Home.css'
import HeroSection from '../Home/components/HeroSection.jsx'
import SectionDeals from '../Home/components/SectionDeals.jsx'
import NewArrivalsSection from './components/NewArrivalsSection.jsx'
import SubscribeSection from './components/SubscribeSection.jsx'

export default function Home() {

    return (
        <div className='home-container'>
            <HeroSection/>
            <SectionDeals/>
            <NewArrivalsSection/>
            <SubscribeSection/>
        </div>
        
    )
}

