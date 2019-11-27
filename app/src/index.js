//index.js
const Koa = require('koa');
const app = new Koa();
 
const KoaBodyParser = require('koa-bodyparser');
app.use(KoaBodyParser());
 
app.use(require('./routes/user'));

app.listen(4001);
 
console.log('Chair Lift app started and listening on port 4001.');
