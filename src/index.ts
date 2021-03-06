import * as Koa from 'koa';
import * as helmet from 'koa-helmet';
import * as koaBodyparser from 'koa-bodyparser';
import * as cors from 'koa2-cors';
import * as jsonMiddleware from 'koa-json';
import config from '../config';
import { AppServer } from '../src/socket/server';
import { MyClient } from '../src/socket/client';

import { Logger } from './utils/logger';
import { bootstrap } from './bootstrap/index';

// middlewares
import routeMiddleware from './routes/index';
import errorMiddleware from './middlewares/error';
import responseMiddleware from './middlewares/response';

const logger = new Logger('chairlift').createLogger();

bootstrap()
  .then(() => {
    const app = new Koa();
    app.use(Logger.koa(logger));
    app.use(helmet());
    app.use(
      koaBodyparser({
        onerror: (err, ctx) => {
          console.error(err);
          ctx.throw('Cannot parse body', 422);
        },
      }),
    );
    app.use(
      cors({
        // TODO
        // origin: ,
        // allowHeaders: [],
        allowMethods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
      }),
    );
    app.use(errorMiddleware());
    app.use(jsonMiddleware());
    app.use(routeMiddleware());
    app.use(responseMiddleware());

    const sockerServer = new AppServer(app);

    //const client = new MyClient();

    app.listen(config.server.port, () => {
      console.info('server started on port %d', config.server.port);
    });

    app.on('error', err => {
      console.error('server error', err);
    });
  })
  .catch(err => {
    logger.fatal(err);
  });
