const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookie_parser = require('cookie-parser')
const route = require('./route/user');

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cookie_parser());
app.use('/', route);

app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON POST ${PORT}`);
});