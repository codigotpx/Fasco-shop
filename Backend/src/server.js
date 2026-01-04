import express from "express";
import cors from "cors";
import authRoutes from "./routers/auth.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* ======================
   CORS CONFIG
====================== */

const allowedOrigins = [
  "http://localhost:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Permite Postman y requests sin origin
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ======================
   MIDDLEWARES
====================== */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
