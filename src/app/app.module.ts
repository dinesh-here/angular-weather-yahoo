import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppService } from './app.service';
import { LoaderInterceptor } from "./http-inspector.service";
import { RouterModule, Routes } from '@angular/router';
import { WeatherPipe } from './weather.pipe';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { DragScrollModule } from 'ngx-drag-scroll';
const routes: Routes = [
  { path: "about", component: HelloComponent }
]
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes), DragScrollModule],
  declarations: [AppComponent, HelloComponent, WeatherPipe, WeatherCardComponent],
  bootstrap: [AppComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  }, AppService]
})
export class AppModule { }
