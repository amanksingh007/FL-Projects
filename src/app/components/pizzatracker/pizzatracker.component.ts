import { NgStyle } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {
    this.getDirection();
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
