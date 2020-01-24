import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { get } from 'lodash';
import { Observable } from 'rxjs';
import { AmplifyService } from 'aws-amplify-angular';
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AmplifyService) {}
  sessionToken: string;
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const session = this.auth.auth();
    const idToken = get(session, 'user.signInUserSession.idToken.jwtToken');
    request = request.clone({
      withCredentials : false,
      headers:  new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:  `Bearer ${idToken}`
      })
  });
    return next.handle(request);
  }
}

