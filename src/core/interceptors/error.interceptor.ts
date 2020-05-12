import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GatewayInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // this.router.navigateByUrl('/login');

    // This clones the request to give the ability to add a new header
    // if we are using auth this is where we would put in our information on authentication to pass to the server

    const authReq = req.clone({ headers: req.headers.set('headerName', 'headerValue') });

    // send the newly created request

    return next.handle(authReq)
      .catch((error, caught) => {
        return Observable.throw(this.routeError(error));
      });
  }

  public routeError(err: any) {

    if (err.status == 403) {
      this.router.navigateByUrl('/error/403');
    } else if (err.status == 404) {
      this.router.navigateByUrl('/error/404');
    } else if (err.status >= 500) {
      this.router.navigateByUrl('/error/500');
    }

    return err;
  }

}
