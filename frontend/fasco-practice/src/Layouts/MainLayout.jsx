import { Outlet  } from 'react-router';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/Layout.css'
import { CartProvider } from '../pages/Shop/components/CartContext.jsx';

const MainLayout = () => {
    return (
        <CartProvider>
            <div className='layout-container'>
                <div className='container-element'> 
                    <Header />
                    <main className='main-content'>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </CartProvider>
    )
}

export default MainLayout;