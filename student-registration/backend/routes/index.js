const express = require("express");

const router = express.Router();

router.get("/", (req, res)=>{
    res.get("Hello World")
})

module.exports = router;