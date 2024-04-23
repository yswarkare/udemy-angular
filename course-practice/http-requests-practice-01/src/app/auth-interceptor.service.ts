import {
  HttpEvent,
  // HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz'),
    });
    console.log(modifiedRequest.headers);
    return next.handle(modifiedRequest);
    // .pipe(
    //   tap((event) => {
    //     if (event.type === HttpEventType.Response) {
    //       console.log('response arrived, response body is: ', event.body);
    //     }
    //   })
    // );
  }
}
