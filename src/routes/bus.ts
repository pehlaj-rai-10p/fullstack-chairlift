import * as Router from 'koa-router';
import * as compose from 'koa-compose';
import config from '../../config/index';
import * as ctrl from '../controllers/bus';

const router = new Router({
  prefix: `${config.api.baseURL}/bus`,
});

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/', ctrl.registerRider);

router.put('/:id', ctrl.updateRiderProfile);

router.delete('/:id', ctrl.deleteRider);

const routes = router.routes();
export default compose([routes]);
