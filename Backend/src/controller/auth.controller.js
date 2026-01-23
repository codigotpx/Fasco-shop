import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { pool } from '../config/db.js'

export const register = async (req, res) => {
    const { name, lasName, phoneNumber, email, password } = req.body

    try {
        if( !name || !email || !password) {
            return res.status(400).json({
                message: "name, email and password are obligatory"
            })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)) {
            return res.status(400).json(
                {
                    message: "Invalid email format"
                }
            )
        }

        if(password.length < 6) {
            return res.status(400).json(
                {
                    message: "Password must be at least 6 characters"
                }
            )
        }


        const userExists = await pool.query(
            "SELECT 1 FROM users WHERE email = $1",
            [email]
        )


        if(userExists.rows.length > 0) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await pool.query(
            "INSERT INTO users (name, lasName, phoneNumber, email, password) values ($1, $2, $3, $4, $5) RETURNING id, name, email",
            [name, lasName, phoneNumber, email, hashedPassword]
        )

        const user = newUser.rows[0]

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        res.cookie('token', token,  {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 
        })

        res.status(201).json({
            message: "User register successfully",
            user: user.id,
            name: user.name,
            email: user.email
        })




    } catch (e) {
        console.error(e)
        res.status(500).json({
            message: "Server error"
        })
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are obligatory"
            })
        }
        

        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        )

        if (result.rows.length === 0) {
            return res.status(400).json({
                message: "Email or password incorrect"
            })
        }

        const user = result.rows[0]

        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        })

        res.json({
            message: 'Login successfull',
            user: user.id,
            name: user.name,
            lasname: user.lasname,
            email: user.email
        })

        console.log("login successful")
    } catch (e) {
        console.error(e)
        res.status(500).json({
            message: "Login error"
        })
    }
}

export const logout = (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        secure: true,
        expiresIn: new Date(0)
    })

    res.status(201).json({
        message: "Logout successful"
    })
}


export const checkAuth = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT name, lasName, email FROM users WHERE id = $1",
            [req.userId]
        )

        if (result.rows === 0){
            res.status(404).json({
                mwssage: "User not found"
            })
        }

        const data = await result.rows[0]

        res.json({
            name: data.name,
            lasname: data.lasname,
            email: data.email
        })
        
    } catch (error) {
        console.error("Check auth error", error)
        res.status(500).json({
            message: "Server error"
        })
    }
}