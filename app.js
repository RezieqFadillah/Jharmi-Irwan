require('dotenv').config()
const express = require('express');
const app = express()
const allRoutes = require('./routes');
const db = require('./config/koneksi')
const cors = require('cors');

db
  .then(() => {
    console.log("tersambung ke db");
  })
  .catch((err) => console.log(err));

app.listen(process.env.PORT, (req,res) => {
    console.log(`server run port  ${process.env.PORT}`);
})

app.use(express.static("views"))
app.engine("html", require("hbs").__express)
app.set("view engine", "html")

app.use(express.json());
app.use(cors());
app.use(allRoutes);