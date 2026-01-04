import './RegisterForm.css'
import logoGoogle from '../../../assets/logo-google.png'
import logoGmail from '../../../assets/logo-gmail.png'
import Button from '../../../components/Buttons/Button.jsx'
import { useState } from 'react'
import { Link } from 'react-router'
import { Register } from '../services/authService.js'

const RegisterForm = () => {
    const [ name, setName ] = useState("")
    const [ lasName, setLasName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ phoneNumber, setPhoneNumber] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword] = useState("")
    const [ error, setError ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ( password !== confirmPassword ) {
            return (setError("The password do not match"))
        }

        try {
            const data = await Register({name, lasName, phoneNumber, email, password })


        } catch (err) {
            setError(err.message)
        }
    }

    

    return (
        <section className="container-register">
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

            <form  onSubmit={handleSubmit} className='register-form-container' action="">
                <input 
                className='input-login-form'
                type="text"
                placeholder='First Name'
                onChange={(e) => setName(e.target.value)}
                required
                />

                <input 
                className='input-login-form'
                type="text"
                placeholder='Las Name'
                onChange={(e) => setLasName(e.target.value)}
                required
                />

                <input 
                className='input-login-form'
                type="email"
                placeholder='Email Address'
                onChange={(e) => setEmail(e.target.value)}
                required
                />

                <input 
                className='input-login-form'
                type="text"
                placeholder='Phone Number'
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                />

                <input 
                className='input-login-form'
                type="password"
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required

                />
                <input 
                className='input-login-form'
                type="password"
                placeholder='Confirm Password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />

                {error && <p className='error'>{error}</p>}

                <Button className='button-register' variant="primary" type="submit"> 
                    Create Account 
                </Button>
                <p>Already have an account? <Link className='link-register-to-login' to="/login">Login</Link></p>
            </form>
        </section>
    )
}

export default RegisterForm