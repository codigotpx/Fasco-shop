
const API_URL = import.meta.env.VITE_API_URL

export const authService = {
    register: async (userData) => {
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(userData)
        })

        const data = await res.json()

        if(!res.ok){
            throw new Error("Register error")
        }

        return data
    },

    login: async ( email, password ) => {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ email, password })
        })

        const data = await res.json()

        if(!res.ok) {
            throw new Error("Login error")
        }

        return data
    },

    logout: async () => {
        const res = await fetch(`${API_URL}/logout`, {
            method: "POST",
            credentials: "include"
        })

        const data = await res.json()

        if (!res.ok) {
            throw new Error("Logout error")
        }

        return data
    },

    checkAuth: async () => {
        const res = await fetch(`${API_URL}/check`, {
            credentials: "include"
        })

        const data = await res.json()

        if(!res.ok) {
            throw new Error(data.message || "Check error")
        }

        return data
    }
}