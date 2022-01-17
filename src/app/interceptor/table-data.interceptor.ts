import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent, HttpErrorResponse,
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AppService} from '../app.service';

@Injectable()
export class TableDataInterceptor implements TableDataInterceptor {


  constructor(private appService: AppService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      const er = err?.error?.error
      if (er) {
        this.appService.errorPopup.show = true;
        this.appService.errorPopup.title = 'Error';
        this.appService.errorPopup.msg = er?.message;
      }
      return throwError(() => err)
    }));
  }
}
