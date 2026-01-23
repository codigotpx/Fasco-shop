import { Router } from 'express'
import { register, login, logout, checkAuth } from '../controller/auth.controller.js'
import { authMiddleware } from "../middleware/auth.middleware.js"
import rateLimit from 'express-rate-limit'

const router = Router()

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, 
  message: { message: 'Too many login attempts, please try again after 15 minutes' },
  standardHeaders: true,
  legacyHeaders: false,
})

router.post("/register", register)
router.post("/login", loginLimiter, login)
router.post("/logout", logout)
router.get("/check", authMiddleware, checkAuth)

export default router

