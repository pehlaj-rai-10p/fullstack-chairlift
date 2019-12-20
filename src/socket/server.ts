import { createServer, Server } from 'http';
import * as Koa from 'koa';
import * as socketIo from 'socket.io';

export class AppServer {
    public static readonly PORT: number = 4003;
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
        this.io = socketIo(this.server, {
            path: '/api/v1/bus'
        });
        //this.io.attach(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connect', (socket: any) => {
            console.log('\n\nConnected client on port %s.\n\n', this.port);
            //this.io.path('/api/v1/bus/info').emit('/', 'Message from server.');
            // socket.on('event', (_m: any) => {
            //     console.log('\n\nMessage received from app\n\n');//JSON.stringify(m));
            //     this.io.sockets.emit('event', { content: 'sending message again' });
            // });

            // socket.on('/', (_m: any) => {
            //     console.log('\n\nMessage received from app2\n\n');//JSON.stringify(m));
            //     this.io.sockets.emit('info', { content: 'sending message again2' });
            // });

            socket.on('event', (_m: any) => {
                console.log('\n\nMessage received from app3\n\n');//JSON.stringify(m));
                //this.io.sockets.emit('info', { content: 'sending message again2' });
            });

            socket.on('event', (_m: any) => {
                console.log('\n\nMessage received from app2\n\n');//JSON.stringify(m));
                //this.io.sockets.emit('info', { content: 'sending message again2' });
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