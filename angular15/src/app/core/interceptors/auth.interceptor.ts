import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  jwt:any
  constructor(private localStorage: StorageMap) {
   
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.localStorage.get('userCart').subscribe((data:any)=>{
      this.jwt=data.accessToken
      console.log('interceptor', this.jwt)
          });

        
    if (this.jwt) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.jwt}`
        }
      });
    }
    return next.handle(request);
  }
}
