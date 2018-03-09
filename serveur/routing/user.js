var express = require('express')
var bodyParser=require('body-parser')
var app = express()
const router = require('express').Router();

//const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/DATAbduser', (err, client) => {
      if (err) return console.log(err);
      let db = client.db('DATAbduser');
      closure(db);
  })
} 





module.exports = router;