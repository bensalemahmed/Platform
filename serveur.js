var express = require('express')
var bodyparser = require('body-parser');
var app = express()


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));




const api = require('./server/routing/login')
const api = require('./server/routing/user')
const api = require('./server/routing/cours')
app.use('/login',login);
app.use('/user',user);
app.use('/cours',cours);





app.listen(3000)