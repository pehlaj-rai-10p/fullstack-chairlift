import * as compose from 'koa-compose';
import * as Router from 'koa-router';
import ping from './ping';
import bus from './bus';
import rider from './rider';
import booking from './booking';

const router = new Router();
const routes = router.routes();
const routesToExport = [routes, ping, bus, rider, booking];

export default () => compose(routesToExport);
