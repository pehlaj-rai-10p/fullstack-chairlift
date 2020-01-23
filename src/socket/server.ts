import { createServer, Server } from 'http';
import * as Koa from 'koa';
import * as socketIo from 'socket.io';
import * as busRepo from '../repositories/bus';
import * as bookingService from '../services/booking';
import { Bus } from '../entities';

export class AppServer {
    public static readonly PORT: number = 4003;
    private app: Koa;
    private server: Server;
    private io: socketIo.Server;
    private port: string | number;
    private connections: Map<number, any>;

    constructor(app: Koa) {
        this.app = app;
        this.connections = new Map();
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
            path: '/api/v1/bus/track'
        });
        //this.io.attach(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connect', (socket: any) => {
            console.log('\n\nSocket Connected ', socket.port, socket.path);

            socket.on('event', (async function onEvent(busId: number, bookingId: number) {
                //this.connections.set(bookingId, socket);
                console.log('\n\nEvent received from app: ', busId, bookingId);

                if (busId > 0 && bookingId > 0) {

                    var index = 0;
                    await bookingService.startRide(bookingId);
                    var timer = setTimeout(async function myTimer() {

                        const bus = await busRepo.getById(busId) as Bus;
                        var data = bus.route[index];
                        console.log('\n\nData: ', index, data);
                        socket.emit('data', { data: data, content: 'Server message in event response' });
                        index++;
                        if (bus.route && index >= bus.route.length) {
                            await bookingService.endRide(bookingId);
                            socket.emit('event', -1); // Cancel booking on Ride End
                        }

                        timer = setTimeout(myTimer, 2000);
                    }, 5000);
                }

                // let's cancel after 7 seconds
                setTimeout(() => {
                    console.log('Cancelling');
                    clearTimeout(timer);
                }, 160000);


            }));

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    public getApp(): Koa {
        return this.app;
    }
}