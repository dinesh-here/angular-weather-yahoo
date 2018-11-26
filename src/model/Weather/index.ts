export class Weather{
  title: string;
  lat: number;
  long: number;
  link: string;
  pubDate: string;
  condition: ICondition;
  forecast: Array<IForcaste>;
  constructor(response: any){
    this.title=response.title;
    this.lat=response.lat;
    this.long=response.long;
    this.link=response.link;
    this.pubDate=response.pubDate;
    this.condition=response.condition;
    this.forecast=response.forecast;
  }
}

interface ICondition{
  code: number;
  date: Date | string;
  temp: number;
  text: string;
}

interface ILocation{
  city: string;
  country: string;
  region: string;
}

interface IForcaste{
  code: number;
  date: string;
  day: string;
  high: number;
  low: number;
  text: string;
}