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
  latitude: number | undefined;
  longitude: number | undefined;
  private geoCoder: any;

  @ViewChild('search')
  public searchElementRef: ElementRef | undefined;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.getDirection();
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder();
    });
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude: number, longitude: number) {
    this.geoCoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (results: any, status: any) => {
        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      }
    );
  }

  getDirection() {
    this.origin = { lat: 24.799448, lng: 120.979021 };
    this.destination = { lat: 24.799524, lng: 120.975017 };
  }

  placeMarker($event: any) {
    console.log($event);
    // console.log($event.coords.lat);
    // console.log($event.coords.lng);
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
