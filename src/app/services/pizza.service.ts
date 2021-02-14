import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getPizzaStores(data) {
    let apikey = 'key=' + environment.GMAP_KEY;
    let parameters = '';
    for (const [key, value] of Object.entries(data)) {
      parameters = parameters + `${key}=${value}&`;
    }
    parameters += apikey;
    const opts = { params: new HttpParams({ fromString: parameters }) };
    const _API = 'https://learners-portal.herokuapp.com/api/misc/map/places';
    return this.http.get<any>(_API, opts);
  }

  getTravelTime(data) {
    let apikey = 'key=' + environment.GMAP_KEY;
    let parameters = '';
    for (const [key, value] of Object.entries(data)) {
      parameters = parameters + `${key}=${value}&`;
    }
    parameters += apikey;
    let opts = {
      params: new HttpParams({ fromString: parameters }),
    };
    const _API =
      'https://learners-portal.herokuapp.com/api/misc/map/direction/traveltime';
    return this.http.get<any>(_API, opts);
  }
}
