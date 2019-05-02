import { Injectable } from './node_modules/@angular/core';
import { Observable, of } from './node_modules/rxjs';
import { catchError, map } from './node_modules/rxjs/operators';
import { BaseClientService } from './base-client.service';
import { RemoteLoggingService } from './remote-logging.service';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(
    private baseClient: BaseClientService,
    private logSvc: RemoteLoggingService
  ) {}

  getCards(): Observable<Array<Card>> {
    return this.baseClient.get<Card>('cards', 'getting cards').pipe(
      map(r => r.body),
      catchError((err, source) => {
        const emptyArray: Card[] = [];
        this.logSvc.logError(err);
        return of(emptyArray);
      })
    );
  }
}
