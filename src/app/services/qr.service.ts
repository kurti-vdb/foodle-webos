import { Injectable } from '@angular/core';
import { NGXLogger } from "ngx-logger";
import { Socket } from 'ngx-socket-io';
import { catchError, map, tap, throwError } from 'rxjs';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(
    private socket: Socket,
    private logger: NGXLogger
  ) { }

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }
  getMessage() {
    return this.socket.fromEvent('message')
      .pipe(
        map(data => console.log(data)));
  }

  getQrcode() {
    let guid = UUID.UUID();
    return this.socket.fromEvent(guid)
      .pipe(
        catchError (err => {
          this.logger.error(err);
          return throwError(() => new Error(err));
        }),
        tap(response => {
          this.logger.info(response);
      }));
  }

  sendQrcode() {
    
  }

}
