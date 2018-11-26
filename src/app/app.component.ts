import { Component, OnInit } from '@angular/core';
import {AppService} from "./app.service";
import {Weather} from "../model/Weather";
import {NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  weatherData: Weather;
  currentCity: string;
  isAPIFailed: boolean=false;
  constructor(private appService:AppService,private _router: Router){
  }
  ngOnInit(){
   
  }
  
  loadWeatherData(cityName: string){
      this.appService.getWeatherByCity(cityName).subscribe((data: any)=>{
      this.weatherData = data.query.results ? new Weather(data.query.results.channel.item) : null;
      this.isAPIFailed = data.query.results ? false : true;
    }, (err: any)=>{
      this.weatherData = null;
    });
  }
  handleSearch($event){
    if($event.keyCode===13){
      this.loadWeatherData($event.target.value);
    }
  }
}
