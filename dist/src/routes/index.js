"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose = require("koa-compose");
const Router = require("koa-router");
const ping_1 = require("./ping");
const rider_1 = require("./rider");
const router = new Router();
const routes = router.routes();
const routesToExport = [routes, ping_1.default, rider_1.default];
exports.default = () => compose(routesToExport);
//# sourceMappingURL=index.js.map