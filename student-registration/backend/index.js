const express = require("express");
const cors = require("cors");
const mongoose = require ("mongoose");

require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json())

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useUnifiedTopology:true
})

const port= process.env.PORT;

app.listen(port, () =>{
    console.log("Server is running on PORT", port);
})