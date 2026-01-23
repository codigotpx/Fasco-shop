import { Outlet  } from 'react-router';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/Layout.css'
import { NavbarProvider } from '../context/NavbarContext.jsx';

const MainLayout = () => {
    return (
        <NavbarProvider>
            <div className='layout-container'>
                <div className='container-element'> 
                    <Header />
                    <main className='main-content'>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </NavbarProvider>
    )
}

export default MainLayout;