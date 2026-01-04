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

        const userExists = await pool.query(
            "SELECT * FROM users WHERE email = $1",
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

        res.status(201).json(newUser.rows[0]);


    } catch (e) {
        console.error(e)
        res.status(500).json({
            message: "Server error"
        })
    }
}


export const login = async (req, res) => {
    console.log("Body received =>", req.body)

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
            { user: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        })

        console.log("Login successfully")
    } catch (e) {
        console.error(e)
        res.status(500).json({
            message: "Login error"
        })
    }
}