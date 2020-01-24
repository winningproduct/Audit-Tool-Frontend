import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  sessionToken: string;
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      withCredentials : false,
      setHeaders: {
          'Content-Type':  'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  });
    return next.handle(request);
  }
}
