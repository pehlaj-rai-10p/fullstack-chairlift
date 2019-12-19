import * as io from 'socket.io-client';

export class MyClient {

    private socket: SocketIOClient.Socket;

    constructor() {
        this.socket = io.connect('http://http://localhost:4002/');
        this.socket.on('bus', () => {
            console.log('Received event bus from Server using Socket.io');
        })
        this.socket.emit('bus', { 'id': 1 });

    }
}