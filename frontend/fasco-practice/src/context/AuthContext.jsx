import { createContext, useContext, useState, useEffect } from "react"
import { authService } from "../features/auth/services/authService"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        checkAuth()
    }, [])


    const checkAuth = async () => {
        try {
            const data = await authService.checkAuth()
            setUser(data)
        } catch {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    const register = async (userData) => {
        try {
            setError(null)
            const data = await authService.register(userData)
            setUser(data)
            return { success: true }
        } catch (error) {
            setError(error.message)
            return { success: false, message: error.message }
        }
    }

    const login = async ( email, password ) => {
        try{
            setError(null)
            const data = await authService.login(email, password)
            setUser(data)
            return { success: true}
        } catch (error){
            setError(error.message)
            return { success: false, message: error.message}
        }
    }

    const logout = async () => {
        try {
            await authService.logout()
            setUser(null)
        } catch (error) {
            console.error("logout error", error)
        }
        
    }


    return (
        <AuthContext.Provider value={{
            user,
            loading,
            error,
            register,
            login,
            logout,
            checkAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error("useAuth musth be used within AuthProviver")
    }
    return context
}