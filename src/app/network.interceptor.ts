import { Injectable } from '@angular/core';
import {finalize} from "rxjs";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoaderService} from "./assignment/services/loader.service";
import {AuthService} from "./assignment/services/auth/auth.service";

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(private loader: LoaderService, private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loader.show();
    let token = request.clone({
      setHeaders: {
        Authorization: this.authService.getToken()
      }
    })
    return next.handle(token).pipe(
      finalize(() => this.loader.hide()));
  }
}
