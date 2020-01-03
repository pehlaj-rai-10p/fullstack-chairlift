import { createServer, Server } from 'http';
import * as Koa from 'koa';
import * as socketIo from 'socket.io';
import { Double } from 'typeorm';

export class AppServer {
    public static readonly PORT: number = 4003;
    private app: Koa;
    private server: Server;
    private io: socketIo.Server;
    private port: string | number;

    private index = 0;

    private randomData = [
        { longitude: 67.0354019, latitude: 24.8500037 },
        { longitude: 67.0707169, latitude: 24.862804 },
        { longitude: 67.069437, latitude: 24.861947 },
        { longitude: 67.067028, latitude: 24.861228 },
        { longitude: 67.063782, latitude: 24.860418 },
        { longitude: 67.058526, latitude: 24.859602 },
        { longitude: 67.052106, latitude: 24.859084 },
        { longitude: 67.050955, latitude: 24.857123 },
        { longitude: 67.055359, latitude: 24.846300 },
        { longitude: 67.060364, latitude: 24.840791 },
        { longitude: 67.067894, latitude: 24.836993 },
        { longitude: 67.073757, latitude: 24.833334 },
        { longitude: 67.076393, latitude: 24.813005 },
        { longitude: 67.076616, latitude: 24.800775 },
        { longitude: 67.079496, latitude: 24.793210 },
        { longitude: 67.083187, latitude: 24.790105 },
        { longitude: 67.089577, latitude: 24.786206 },
        { longitude: 67.091864, latitude: 24.782198 },
        { longitude: 67.091440, latitude: 24.781760 },
        { longitude: 67.090422, latitude: 24.780690 },
        { longitude: 67.089635, latitude: 24.779874 }
    ];

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
            console.log('\n\nSocket Connected ', socket.port, socket.path);

            socket.on('event', (event: any) => {
                console.log('\n\nEvent received from app: ', event);//JSON.stringify(m));
                //const random = Math.round(Math.random() * 10);
                var data = this.randomData[this.index];
                console.log('\n\nData: ', this.index, data);
                this.index++;
                if (this.index >= this.randomData.length) {
                    this.index = this.randomData.length - 1;
                }
                socket.emit('data', { data: data, content: 'Server message in event response' });
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