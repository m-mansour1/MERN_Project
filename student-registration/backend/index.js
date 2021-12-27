const express = require("express");
const cors = require("cors");

require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json())


const port= process.env.PORT;

app.listen(port, () =>{
    console.log("Server is running on PORT", port);
})