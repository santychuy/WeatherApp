import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Pedir peticiones http (GET, POST)

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = '34da71c05a50fef6e9692f6030dc06f1';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;
  }

  getWeather(cityName: string, countryCode: string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }

}
