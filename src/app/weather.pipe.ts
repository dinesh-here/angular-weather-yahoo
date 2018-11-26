import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weather'
})
export class WeatherPipe implements PipeTransform {
  weatherIconMap ={
    "scattered_thunderstorms":{"icon":"x1F329;","color":"yellow"},
    "rain":{"icon":"x1F327;","color":"lightblue"},
    "mostly_cloudy":{"icon":"x2601","color":"lightblue"},
    "showers":{"icon":"x2601","color":"lightblue"},
    "breezy":{"icon":"x2744","color":"lightblue"},
    "cloudy":{"icon":"x2601","color":"lightblue"},"sunny":{"icon":"x1F324","color":"yellow"},
    "mostly_sunny":{"icon":"x2600","color":"yellow"},
    "thunderstorms":{"icon":"x26A1","color":"yellow"},
    "partly_cloudy":{"icon":"x1F328","color":"lightblue"}
  }
  getColor(weather: string){
    return this.weatherIconMap[weather.toLowerCase().replace(/\s+/g,"_")] ? this.weatherIconMap[weather.toLowerCase().replace(/\s+/g,"_")].color : "lightblue";
  }
  getIcon(weather:string){
    return this.weatherIconMap[weather.toLowerCase().replace(/\s+/g,"_")] ? "&#"+this.weatherIconMap[weather.toLowerCase().replace(/\s+/g,"_")].icon : ""
  }
  transform(value: any, args?: any): any {
    let tempElement= document.createElement("div");
    let tempIcon =document.createElement("span");
    tempIcon.innerHTML=this.getIcon(value);
    tempIcon.classList.add(this.getColor(value));
    //tempElement.innerHTML = "<span style='color:"+this.getColor(value)+"'>"+tempIcon.outerHTML+"</span>";
    tempElement.appendChild(tempIcon);
    return tempElement.outerHTML;
  }

}