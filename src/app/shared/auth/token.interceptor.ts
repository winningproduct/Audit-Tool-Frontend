import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let cloneReq = null;
      if (!environment.production) {
        cloneReq = req.clone({
          headers: req.headers.set('Authorization', '1')
        });
      }
      return next.handle(cloneReq);
    }
  }
