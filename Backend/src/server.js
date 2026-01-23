import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import helmet from 'helmet'
import authRoutes from "./routers/auth.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(helmet())

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true 
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

/* ======================
   ROUTES
====================== */

app.use("/api/auth", authRoutes);

/* ======================
   TEST ROUTE (opcional)
====================== */

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend OK 🚀" });
});

/* ======================
   SERVER
====================== */

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
