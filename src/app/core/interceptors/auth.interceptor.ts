import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const duplicate = this.addAccessToken(req);
    return next.handle(duplicate);
  }

  addAccessToken(request) {
    const accessToken = this.authService.getAccesstoken();
    const bNecessary = !request.url.includes('/auth');
    if (bNecessary) {
      return request.clone({
        headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
      });
    }
    return request;
  }
}
