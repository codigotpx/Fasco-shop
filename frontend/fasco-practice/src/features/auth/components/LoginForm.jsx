import './LoginForrm.css'
import Button from '../../../components/Buttons/Button.jsx'
import logoGoogle from '../../../assets/logo-google.png'
import logoGmail from '../../../assets/logo-gmail.png'
import { Link } from 'react-router'
import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext.jsx'


const LoginForm = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const { login } = useAuth()
    const [ error, setError ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await login( email, password )

            console.log("Login successfuly", data)

            // redirect

        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className='form-container'>
            <div className='section-api-google'>
                <Button className='button-login-api-google' variant='secondary'>
                    <img className='logos-login-google' src={logoGoogle} alt="logo google" />
                    <p className='text-button-login'>Sign up with Google</p>
                </Button>
                <Button className='button-login-api-google' variant='secondary'>
                    <img className='logos-login-google' src={logoGmail} alt="logo google" />
                    <p className='text-button-login'>Sign up with Email</p>
                </Button>
            </div>

            <p className='text-or'>-- OR --</p>

            <form className='form-login' onSubmit={handleSubmit}>
                <input
                    className='input-login-form'
                    placeholder='Email'
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className='input-login-form'
                    placeholder='Password'
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className='error'>{error}</p>}

                <Button className='button-login-sign-in' type="submit">
                    Sign in
                </Button>

                <Link to="/register" className='link-to-register-now'>
                    Register now
                </Link>

                <Link to="/forget-password" className='link-forget-password'>
                    Forget password?
                </Link>
            </form>
        </div>
    )
}

export default LoginForm