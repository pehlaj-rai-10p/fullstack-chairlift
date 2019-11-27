
//UserHandler.js
var UserHandler = {
    getHelloWorld: async function (ctx, next) {
        ctx.body = {response: 'Hello World'};
        ctx.status = 200;
        await next();
    }
};
module.exports = UserHandler;