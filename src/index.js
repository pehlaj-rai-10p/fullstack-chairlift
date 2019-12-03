//index.js

//import "reflect-metadata";
//module.exports = 'chairlift';

//import 'dotenv/config';

const Dotenv = require('dotenv/config')

const Koa = require('koa');
const app = new Koa();

console.log('Hello Node.js project.');
console.log(process.env.MY_SECRET);

const KoaBodyParser = require('koa-bodyparser');
app.use(KoaBodyParser());
 
app.use(require('./routes/user'));

app.listen(4001);

console.log('Chair Lift app started and listening on port 4001.');
