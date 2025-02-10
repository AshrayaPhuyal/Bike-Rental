import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDb } from "./db/db.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



connectDb().then(() => {
    app.listen(3000, () => {
        console.log(`Server is running on port 3000`)
    })
})   


