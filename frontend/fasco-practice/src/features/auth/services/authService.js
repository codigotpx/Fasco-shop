
const API_URL = "http://localhost:3000/api/auth"

export const Login = async ({ email, password }) => {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers:  { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message || "Login failed");
    }

    return data;
}

export const Register = async ({ name, lasName, phoneNumber, email, password }) => {
    const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lasName, phoneNumber, email, password })
    })

    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message || "Register failed")
    }

    return data
}