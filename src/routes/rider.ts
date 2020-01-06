import * as Router from 'koa-router';
import * as compose from 'koa-compose';
import config from '../../config/index';
import * as ctrl from '../controllers/rider';

const router = new Router({
  prefix: `${config.api.baseURL}/rider`,
});

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/info', ctrl.getByUserName);

router.post('/', ctrl.registerRider);

router.put('/:id', ctrl.updateRiderProfile);

router.delete('/:id', ctrl.deleteRider);

const routes = router.routes();
export default compose([routes]);
