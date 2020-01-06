import * as Router from 'koa-router';
import * as compose from 'koa-compose';
import config from '../../config/index';
import * as ctrl from '../controllers/booking';

const router = new Router({
  prefix: `${config.api.baseURL}/booking`,
});

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.bookingDetails);

router.post('/', ctrl.bookRide);

router.post('/start', ctrl.startRide);

router.post('/end', ctrl.endRide);

router.delete('/:id', ctrl.cancelBooking);

const routes = router.routes();

export default compose([routes]);
