import { NgStyle } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { HttpErrorResponse } from '@angular/common/http';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
@Component({
  selector: 'app-pizzatracker',
  templateUrl: './pizzatracker.component.html',
  styleUrls: ['./pizzatracker.component.css'],
})
export class PizzatrackerComponent implements OnInit {
  public lat = 24.799448;
  public lng = 120.979021;
  map: any;
  mapClickListener: any;
  zone: any;
  public origin: any;
  public destination: any;
  coordinates: any;
  zoom: number | undefined;
  address: string | undefined;
  latitude: any = '28.7041';
  longitude: any = '77.1025';
  private geoCoder: any;
  pizzaStores: any = [];
  showRoute: boolean = false;
  currentPizzaStore: any;
  Me: string = 'You';
  @ViewChild('search')
  public searchElementRef: ElementRef | undefined;
  waypoints: any = [];
  travelDetails: any = { time: '', distnce: '' };
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  public renderOptions = {
    suppressMarkers: true,
  };

  public markerOptions = {
    origin: {
      label: 'You',
      draggable: false,
      waypoints: [],
    },
    destination: {
      label: 'Pizza',
      waypoints: [],
    },
    waypoints: {},
  };
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private _pizzaService: PizzaService
  ) {}

  ngOnInit(): void {
    //this.getDirection();
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder();
    });
  }
  public handleAddressChange(address: Address) {
    this.latitude = address.geometry.location.lat();
    this.longitude = address.geometry.location.lng();
    this.showRoute = false;
    this.address = address.formatted_address;
    this.origin = { lat: this.latitude, lng: this.longitude };
    this.getPizzaStores(this.latitude, this.longitude);
  }
  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.origin = { lat: this.latitude, lng: this.longitude };
        this.destination = { lat: this.latitude, lng: this.longitude };
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude: number, longitude: number) {
    this.getPizzaStores(latitude, longitude);
    this.geoCoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (results: any, status: any) => {
        if (status === 'OK') {
          if (results[0]) {
            //this.zoom = 0;
            this.address = results[0].formatted_address;
            console.log(this.address);
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      }
    );
  }

  getPizzaStores(lat: number, long: number) {
    const queryData = {
      location: lat + ',' + long,
      keyword: 'pizza OR Domino',
      radius: '20000',
    };
    this._pizzaService.getPizzaStores(queryData).subscribe(
      (res) => {
        this.processStores(res['results']);
      },
      (err: HttpErrorResponse) => {}
    );
  }

  processStores(stores) {
    console.log(stores);
    this.pizzaStores = stores;
    if (this.pizzaStores.length == 0) {
      alert('No pizza stores around you');
    }
  }
  getDirection() {
    this.origin = { lat: 24.799524, lng: 120.975017 };
    this.destination = { lat: 24.799524, lng: 120.975017 };
  }

  drawDirection(dest) {
    console.log(dest);
    this.destination = {
      lat: dest.geometry.location.lat,
      lng: dest.geometry.location.lng,
    };
    this.currentPizzaStore = dest;
    this.showRoute = true;
    const data = {
      origin: this.origin.lat + ',' + this.origin.lng,
      destination: this.destination.lat + ',' + this.destination.lng,
      departure_time: 'now',
    };
    this._pizzaService.getTravelTime(data).subscribe((res) => {
      console.log(res.results);
      let data = res.results.routes[0].legs[0];
      this.travelDetails.time = data.duration.text;
      this.travelDetails.distance = data.distance.text;
    });
  }

  public mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.mapClickListener = this.map.addListener(
      'click',
      (e: google.maps.MouseEvent) => {
        console.log(e.latLng.lat(), e.latLng.lng());
        const lat = e.latLng.lat();
        const long = e.latLng.lng();
        this.destination = { lat: lat, lng: long };
      }
    );
  }
}
