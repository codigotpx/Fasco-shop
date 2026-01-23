import { Link } from 'react-router'
import '../styles/AccountSection.css'
import { useNavbar } from '../context/NavbarContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import Button from '../components/Buttons/Button.jsx'

const AccountSection = () => {
    const { isUserOpen } = useNavbar()
    const { user, logout } = useAuth()

    return (
        <div className={`${isUserOpen ? 'container-acount-section': 'container-acount-section-disable'}`}>
            <ul className='ul-li-account'>
                <li>
                    {user? <Link>Acoount</Link>  : <Link to="/register">Sign in</Link>} 
                    <Link>My orders</Link>  
                    <Link>Account Settings</Link>  
                    {user ?  <Button onClick={logout} >Logout</Button> : ""}
                    
                </li>
            </ul>
        </div>
    )
}

export default AccountSection