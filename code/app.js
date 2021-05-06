var msg='Hello World';
console.log(msg);
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pool =  require('./utils/database');

const userRo = require('./routes/user');
const empRo = require('./routes/employee');
const ownRo = require('./routes/owner');
const invRo = require('./routes/invent');
const emp_maRo = require('./routes/empl');
const upemp = require('./routes/up_empl');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/',userRo);
app.use('/employee',empRo);
app.use('/owner',ownRo);
app.use('/invent',invRo);
app.use('/empl',emp_maRo);
app.use('/up_empl',upemp);

app.listen(3000);