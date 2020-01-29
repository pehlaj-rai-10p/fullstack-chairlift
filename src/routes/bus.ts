import * as Router from 'koa-router';
import * as compose from 'koa-compose';
import config from '../../config/index';
import * as ctrl from '../controllers/bus';
import { jwtAuth } from '../middlewares/jwtauth';

const router = new Router({
  prefix: `${config.api.baseURL}/bus`,
});

router.get('/', jwtAuth, ctrl.getAll);

router.get('/:id', jwtAuth, ctrl.getById);

router.post('/', jwtAuth, ctrl.registerBus);

router.delete('/:id', jwtAuth, ctrl.deleteBus);

const routes = router.routes();
export default compose([routes]);
