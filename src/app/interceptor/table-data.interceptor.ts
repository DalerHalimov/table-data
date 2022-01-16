import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent, HttpSentEvent,
} from '@angular/common/http';
import {mergeMap, Observable, of} from 'rxjs';
import {AppService} from '../app.service';

@Injectable()
export class TableDataInterceptor implements TableDataInterceptor {


  constructor(private appService: AppService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(mergeMap((err: HttpSentEvent | any) => {
      console.log('err', err);
      return of(err);
    }));
  }
}
