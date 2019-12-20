import * as io from 'socket.io-client';

export class MyClient {

    private socket: SocketIOClient.Socket;

    constructor() {
        this.socket = io.connect('http://localhost:4003/', {
            path: '/api/v1/bus'
        });
        this.socket.on('/', () => {
            console.log('Received event bus from Server using Socket.io');
        })
        this.socket.emit('/', { 'id': 1 });

        this.socket.open();
        this.socket.connect();
        this.socket.emit('/', { 'id': 1 });
    }
}