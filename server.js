// Import dependencies
///////////////////////////

require('dotenv').config()
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")

//////////////////////
//creat our express application object
//////////////////////

const app = require('liquid-express-views')(express())

////////////////////////
///middleware
///////////////////////
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

////////////////////////
///Routes
///////////////////////

app.get('/', (req, res) => {
    res.send('your server is running') 
})




////////////////////////
///server listener
///////////////////////

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`)
})