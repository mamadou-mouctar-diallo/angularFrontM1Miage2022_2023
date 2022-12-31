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

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(private loader: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.loader.show();
    return next.handle(request).pipe(
      finalize(() => this.loader.hide()));
  }
}
