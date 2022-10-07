import {io} from 'socket.io-client';
import { Observable } from 'rxjs';

export class ChatService {
    private url = 'http://localhost:3000';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    public sendMessage(message:any) {
        this.socket.emit('new-message', message);
    }

    public getMessages = () => {
        return Observable.create((observer:any) => {
            this.socket.on('new-message', (message) => {
                observer.next(message);
            });
        });
    }
}