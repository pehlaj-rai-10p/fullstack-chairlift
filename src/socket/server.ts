import { createServer, Server } from 'http';
import * as Koa from 'koa';
import * as socketIo from 'socket.io';
import { Bus } from '../entities/bus';

export class AppServer {
    public static readonly PORT: number = 4002;
    private app: Koa;
    private server: Server;
    private io: socketIo.Server;
    private port: string | number;

    constructor(app: Koa) {
        this.app = app;
        //this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = new Koa();
    }

    private createServer(): void {
        this.server = createServer(this.app.callback());//.listen(this.port);
    }

    private config(): void {
        this.port = process.env.PORT || AppServer.PORT;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port);
            socket.on('bus', (m: Bus) => {
                console.log('[server](bus): %s', JSON.stringify(m));
                this.io.emit('bus', m);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    public getApp(): Koa {
        return this.app;
    }
}