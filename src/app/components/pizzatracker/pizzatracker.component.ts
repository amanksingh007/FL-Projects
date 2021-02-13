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
  latitude: any;
  longitude: any;
  private geoCoder: any;
  pizzaStores: any = [];
  showRoute: boolean = false;
  currentPizzaStore: any;
  Me: string = 'You';
  @ViewChild('search')
  public searchElementRef: ElementRef | undefined;
  waypoints: any = [];
  public renderOptions = {
    suppressMarkers: true,
  };

  public markerOptions = {
    origin: {
      label: 'Me',
      draggable: false,
      waypoints: [],
    },
    destination: {
      label: 'MARKER LABEL',
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
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.origin = { lat: this.latitude, lng: this.longitude };
        this.destination = { lat: this.latitude, lng: this.longitude };
        console.log(this.latitude + ',' + this.longitude);
        //this.zoom = 40;
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
      type: 'restaurant',
      keyword: 'pizza',
      radius: '30000',
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
  }
  placeMarker($event: any) {
    console.log($event);
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
