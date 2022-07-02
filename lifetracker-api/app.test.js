const express = require("express");
const morgan = require("morgan");
const appTest = express();

appTest.use(morgan("tiny"))
appTest.use(express.json())

appTest.get("/", async (req, res, next) => {
    res.status(200).json({ ping: "pong" })
})

module.exports = appTest