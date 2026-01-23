import './ForgetPasswordForm.css'
import { useAuth } from '../../../context/AuthContext'

const ForgetPasswordForm = () => {
    const { checkAuth } = useAuth()
    return (
        <section className="forget-password-container">
            <button onClick={() => checkAuth}>
                here
            </button>
        </section>
    )
}

export default ForgetPasswordForm