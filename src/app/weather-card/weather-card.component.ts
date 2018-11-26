import { Component, OnInit, Input } from '@angular/core';
import {Weather} from "../../model/Weather";
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherItems: Array<Weather> =[];
  constructor() { }

  ngOnInit() {
  }

}