import '../styles/authLayout.css'


const AuthLayout = ({ children, title, img }) => {

    return (
        <section className="container-auth-layout">
            <div className='container-form'>
                <img className='img-login' src={img}/>
                <div className='form-container'>
                    <h2 className='icon-login'>
                        FASCO
                    </h2>
                    <h4 className='p-login-sing-in-to-fasco'> 
                        {title}
                    </h4>
                    {children}
                </div>  
            </div>
        </section>
    )
}

export default AuthLayout