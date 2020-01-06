"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const compose = require("koa-compose");
const index_1 = require("../../config/index");
const ping_1 = require("../controllers/ping");
const router = new Router({
    prefix: `${index_1.default.api.baseURL}/ping`,
});
router.get('/', ping_1.ping);
const routes = router.routes();
exports.default = compose([routes]);
//# sourceMappingURL=ping.js.map