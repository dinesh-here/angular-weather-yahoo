import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from "../enviroment/enviroment.prod";
@Injectable()
export class AppService {

  constructor(private http:HttpClient) { }
  getWeatherByCity(city: string){
    return this.http.get(config.constructEndpoint(city));
  }
  showLoader(){
        document.body.classList.add("loading");
  }
  hideLoader(){
       document.body.classList.remove("loading");
  }
}