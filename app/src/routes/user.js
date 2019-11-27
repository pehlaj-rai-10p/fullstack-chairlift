//Router.js
const Router = require('koa-router');
const userHandler = require('../UserHandler');
 
var myRouter = new Router();
 
myRouter.get('/helloworld', async function (ctx, next) {
    await userHandler.getHelloWorld(ctx, next);
});
 
module.exports = myRouter.routes();