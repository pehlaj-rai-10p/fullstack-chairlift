import * as Router from 'koa-router';
import * as compose from 'koa-compose';
import config from '../../config/index';
import * as ctrl from '../controllers/rider';
import { jwtAuth } from '../middlewares/jwtauth';

const router = new Router({
  prefix: `${config.api.baseURL}/rider`,
});

router.get('/', jwtAuth, ctrl.getAll);

router.get('/:id', jwtAuth, ctrl.getById);

router.post('/info', ctrl.getByUserName);

router.post('/', jwtAuth, ctrl.registerRider);

router.put('/:id', jwtAuth, ctrl.updateRiderProfile);

router.delete('/:id', jwtAuth, ctrl.deleteRider);

const routes = router.routes();
export default compose([routes]);
