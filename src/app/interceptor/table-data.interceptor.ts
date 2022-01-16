import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, filter, switchMap, take} from 'rxjs/operators';
import {AuthService, LogInResponse} from '../services/auth.service';
import {IToken} from '../interface';
import {AppService} from '../app.service';

@Injectable()
export class AuthInterceptor implements AuthInterceptor {
  private isRefreshing = false;
  tokenData: IToken = {};
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  constructor(
    private appService: AppService,
    public authService: AuthService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.getToken() && this.authService.getToken().accessToken) {
      request = this.addToken(request, this.authService.getToken().accessToken);
    }

    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(request, next);
      } else {
        if (error && error.message && !(error.error && error.error.errors)) {
          this.appService.error.show = true;
          this.appService.error.title = error.statusText;
          this.appService.error.msg = error.message;
        }
        if (error && error.error && error.error.message) {
          this.appService.error.show = true;
          this.appService.error.title = error.statusText;
          this.appService.error.msg = error.error.message;
        }
        this.appService.showSpinner = false;
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((token: LogInResponse) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.accessToken);
          return next.handle(this.addToken(request, token.accessToken));
        }),
        catchError((error: HttpErrorResponse) => {
          if (this.isBlacklistedEndpoint(error.url || '')) {
            this.authService.signOut();
          }

          return throwError(error);
        })
      );

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }

  /**
   * Determines whether token should not be sent among with the request.
   * @param url Request URL.
   * @returns Boolean.
   */
  private isBlacklistedEndpoint(url: string): boolean {
    return url.indexOf('refresh') > 0;
  }
}
