/// <reference types="koa" />
/// <reference types="koa-bodyparser" />
/// <reference types="koa-bunyan-logger" />
import * as compose from 'koa-compose';
import * as Router from 'koa-router';
declare const _default: () => compose.ComposedMiddleware<import("koa").ParameterizedContext<any, Router.IRouterParamContext<any, {}>>>;
export default _default;
