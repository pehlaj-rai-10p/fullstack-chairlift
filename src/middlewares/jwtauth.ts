import * as compose from 'koa-compose';
import * as jwt from "jsonwebtoken";
import config from "../../config";
import { Context } from "koa";
import boom = require('boom');

export const jwtAuth = async (ctx: Context, next: () => void) => {

    const authToken = ctx.headers['auth'];
    const result = jwt.verify(authToken, config.jwtSecret);
    if (result) {
        await next();
    } else {
        return boom.unauthorized('Unauthorized');
    }
};
