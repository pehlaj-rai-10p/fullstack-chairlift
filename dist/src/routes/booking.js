"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const compose = require("koa-compose");
const index_1 = require("../../config/index");
const ctrl = require("../controllers/booking");
const router = new Router({
    prefix: `${index_1.default.api.baseURL}/booking`,
});
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.bookingDetails);
router.post('/', ctrl.bookRide);
router.delete('/:id', ctrl.cancelBooking);
const routes = router.routes();
exports.default = compose([routes]);
//# sourceMappingURL=booking.js.map