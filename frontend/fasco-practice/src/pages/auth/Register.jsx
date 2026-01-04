import AuthLayout from "../../Layouts/AuthLayout"
import registerImg from "../../assets/img-login.png"
import RegisterForm from "../../features/auth/components/RegisterForm"


const Register = () => {
    return( 
        <AuthLayout title="Create Account" img={registerImg}>
            <RegisterForm/>
        </AuthLayout>
    )
}

export default Register