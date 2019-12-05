import * as compose from 'koa-compose';
import * as Router from 'koa-router';
import ping from './ping';
import rider from './rider';

const router = new Router();
const routes = router.routes();
const routesToExport = [routes, ping, rider];

export default () => compose(routesToExport);
