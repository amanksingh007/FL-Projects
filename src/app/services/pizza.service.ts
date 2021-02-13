import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  serviceUrl: string =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
  constructor(private http: HttpClient) {}

  getPizzaStores(data) {
    let apikey = 'key=' + environment.GMAP_KEY;
    let parameters = '';
    for (const [key, value] of Object.entries(data)) {
      console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
      parameters = parameters + `${key}=${value}&`;
    }
    parameters += apikey;
    const API = this.serviceUrl + parameters;
    const _API =
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.0960742,85.31311939999999&radius=49000&type=restaurant&keyword=pizza&key=AIzaSyCT5bL9PgH0cgQbAknxpstJa4o4NjkQilU';
    console.log(API);
    return this.http.get(_API);
  }
}
