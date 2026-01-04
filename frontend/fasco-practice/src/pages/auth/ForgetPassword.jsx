import AuthLayout from '../../Layouts/AuthLayout.jsx'
import logoImg from '../../assets/img-login.png'
import ForgetPasswordForm from '../../features/auth/components/ForgetPasswordForm.jsx'

const ForgetPassword = () => {
 return (
    <AuthLayout title="Forget Password" img={logoImg}>
        <ForgetPasswordForm/>
    </AuthLayout>
 )
}

export default ForgetPassword