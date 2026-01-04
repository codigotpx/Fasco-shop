import AuthLayout from "../../Layouts/AuthLayout.jsx"
import LoginForm from "../../features/auth/components/LoginForm.jsx"
import imgLogin from "../../assets/img-login.png"

const Login = () => {
    return (
        <AuthLayout title="Sign In To FASCO" img={imgLogin}>
            <LoginForm/>
        </AuthLayout>
    )
}

export default Login