const express = require("express");
const path = require("path");
const port = 9000;
const cors = require("cors")




const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, ()=>{
  console.log("server is running at http://localhost ", port)
})