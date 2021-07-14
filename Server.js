const express = require("express");
const app = express();

const mainRouter = require('./AllRoutes/index');
//const mongoose = require("mongoose");

//const mongooseConnection = mongoose().db;

app.set ('view engine','ejs');

app.use('/', mainRouter);

const PORT = process.env.PORT||3000 ;




app.listen(PORT, () => console.log('Listening on port ${PORT}'));

 
