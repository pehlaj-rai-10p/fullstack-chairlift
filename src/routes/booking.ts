import * as Router from 'koa-router';
import * as compose from 'koa-compose';
import config from '../../config/index';
import * as ctrl from '../controllers/booking';
import { jwtAuth } from '../middlewares/jwtauth';

const router = new Router({
  prefix: `${config.api.baseURL}/booking`,
});

router.get('/', jwtAuth, ctrl.getAllByRdier);

router.get('/:id', jwtAuth, ctrl.bookingDetails);

router.post('/', jwtAuth, ctrl.bookRide);

router.post('/start', jwtAuth, ctrl.startRide);

router.post('/end', jwtAuth, ctrl.endRide);

router.delete('/:id', jwtAuth, ctrl.cancelBooking);

const routes = router.routes();

export default compose([routes]);
