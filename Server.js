// const express = require("express");
// const app = express();

// const mainRouter = require('./AllRoutes/index');
// //const mongoose = require("mongoose");

// //const mongooseConnection = mongoose().db;

// app.set ('view engine','ejs');

// app.use('/', mainRouter);

const PORT = process.env.PORT||3000 ;




// app.listen(PORT, () => console.log('Listening on port ${PORT}'));

 
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
 
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);
 
var root = { hello: () => 'Hello world!' };
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(PORT, () => console.log(`Now browse to localhost:${PORT}/graphql`));