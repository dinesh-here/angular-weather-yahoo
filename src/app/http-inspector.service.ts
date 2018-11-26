import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import {AppService} from "./app.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private appService: AppService) {
    console.log("register")
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // start our loader here    
  this.appService.showLoader();
    return next.handle(req).do((event: HttpEvent<any>) => {
      // if the event is for http response
      if (event instanceof HttpResponse) {
        this.appService.hideLoader();
      }

    }, (err: any) => {
      // if any error (not for just HttpResponse) we stop our loader bar
     this.appService.hideLoader();
    });
  }

}