import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weatherObj;

  constructor(private weather: WeatherService) {

  }


  // Lo que hara que se ejecute primerotodo lo queeste dentro
  ngOnInit() {

  }

  getWeatherApi(cityName: string, countryCode: string) {
    this.weather.getWeather(cityName, countryCode).subscribe(
      res => this.weatherObj = res,
      err => alert('No existe ninguna ciudad escrita')
    );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      this.getWeatherApi(cityName.value, countryCode.value);

      cityName.value = '';
      countryCode.value = '';
    }else{
      alert('Ingresa los datos');
    }

    cityName.focus();
    return false;
  }

}
