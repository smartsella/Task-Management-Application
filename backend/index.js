import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"

dotenv.config()
const app = express()
app.use(cors())

const PORT = process.env.PORT
app.use("/api/auth",authRoutes)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
