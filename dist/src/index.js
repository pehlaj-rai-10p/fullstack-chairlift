"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const helmet = require("koa-helmet");
const koaBodyparser = require("koa-bodyparser");
const cors = require("koa2-cors");
const jsonMiddleware = require("koa-json");
const config_1 = require("../config");
const logger_1 = require("./utils/logger");
const index_1 = require("./bootstrap/index");
const index_2 = require("./routes/index");
const error_1 = require("./middlewares/error");
const response_1 = require("./middlewares/response");
const logger = new logger_1.Logger('chairlift').createLogger();
index_1.bootstrap()
    .then(() => {
    const app = new Koa();
    app.use(logger_1.Logger.koa(logger));
    app.use(helmet());
    app.use(koaBodyparser({
        onerror: (err, ctx) => {
            console.error(err);
            ctx.throw('Cannot parse body', 422);
        },
    }));
    app.use(cors({
        allowMethods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
    }));
    app.use(error_1.default());
    app.use(jsonMiddleware());
    app.use(index_2.default());
    app.use(response_1.default());
    app.listen(config_1.default.server.port, () => {
        console.info('server started on port %d', config_1.default.server.port);
    });
    app.on('error', err => {
        console.error('server error', err);
    });
})
    .catch(err => {
    logger.fatal(err);
});
//# sourceMappingURL=index.js.map