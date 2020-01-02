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

    private randomData = [{ latitude: 52.5162041, longitude: 13.378365 }, { latitude: 52.5162041, longitude: 13.378365 }, { latitude: 52.5162041, longitude: 13.378365 }, { latitude: 52.5159999, longitude: 13.3778999 }, { latitude: 52.5206638, longitude: 13.3861149 }, { latitude: 52.5205999, longitude: 13.3861999 }, { latitude: 52.5162792, longitude: 13.3795345 }, { latitude: 52.5163651, longitude: 13.3808541 }, { latitude: 52.5180817, longitude: 13.3804464 }, { latitude: 52.5189292, longitude: 13.3802962 }];

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

            // socket.on('open', function () {

            //     socket.on('event', (event: any) => {
            //         console.log('\n\nEvent received from app is ', event);//JSON.stringify(m));
            //         socket.emit('event', { content: 'Event response from server.' });
            //         //this.io.sockets.emit('event', { content: 'Event response from server.' });
            //     });

            //     //socket.emit('event', { content: 'Event on socket open' });
            //     //socket.emit('message', { content: 'Message on socket open' });
            //     socket.on('message', (mesage: any) => {

            //         socket.emit('message', { content: 'Message response from server' });
            //         console.log('\n\Message received on socket from app is ', mesage);//JSON.stringify(m));
            //     });
            //     socket.on('close', function () {
            //         console.log('\n\Socket close from app3\n\n');//JSON.stringify(m));
            //     });
            // });

            socket.on('message', (mesage: any) => {
                console.log('\n\nMessage received from app: ', mesage);//JSON.stringify(m));
                socket.emit('message', { content: 'Message response from server' });
                //this.io.sockets.emit('message', { content: 'Message response from server' });
            });

            socket.on('event', (event: any) => {
                console.log('\n\nEvent received from app: ', event);//JSON.stringify(m));
                const random = Math.round(Math.random() * 10);
                var data = this.randomData[random];
                console.log('\n\nData: ', random, data);
                socket.emit('data', { data: data, content: 'Server message in event response' });
                //this.io.sockets.emit('event', { content: 'Server message in event response' });
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });

            socket.on('transport', (transport: any) => {
                console.log('\n\nIO Transport from app: ', transport);//JSON.stringify(m));
                socket.emit('event', { content: 'Transport response from server' });
                //this.io.sockets.emit('event', { content: 'sending event - transport' });
            });
        });
    }

    public getApp(): Koa {
        return this.app;
    }
}