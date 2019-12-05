import * as Router from 'koa-router';
import * as compose from 'koa-compose';
import config from '../../config/index';
import * as ctrl from '../controllers/heroes';

const router = new Router({
  prefix: `${config.api.baseURL}/heroes`,
});

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/', ctrl.addHero);

router.put('/:id', ctrl.updateHero);

router.delete('/:id', ctrl.deleteHero);

const routes = router.routes();
export default compose([routes]);
