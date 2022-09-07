const express = require("express");
const route = express.Router();
const pool = require("../db");
const bodyParser = require("body-parser");
const { validateToken } = require("../middlewares/AuthMiddleWare");

route.post("/", validateToken, (req, res) => {
    res.json({ error: "user logged in !" });
});

module.exports = route;