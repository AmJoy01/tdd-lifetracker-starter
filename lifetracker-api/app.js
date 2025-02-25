const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const security = require("./middleware/security")
const { BadRequestError, NotFoundError } = require("./utils/errors")
const authRoutes = require("./routes/auth")
const nutritionRoutes = require("./routes/nutrition")
const app = express()

// Enable cross-origin resource sharing for all origins
app.use(cors())

// Parse incoming request bodies with JSON payloads
app.use(express.json())

// Log request info
app.use(morgan("tiny"))
app.use(security.extractUserFromJwt)

app.use("/auth", authRoutes)
app.use("/nutrition", nutritionRoutes)

app.get("/", (req, res, next) => {
    return res.status(200).json({ ping: "pong" })
})

app.use((req, res, next) => {
    return next(new NotFoundError())
})

app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message

    return res.status(status).json({
        error: { message, status }
    })
})

module.exports = app