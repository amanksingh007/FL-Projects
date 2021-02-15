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
  isCurrent:string=null;
  @ViewChild('search')
  public searchElementRef: ElementRef | undefined;
  waypoints: any = [];
  showMe:boolean=true;
  travelDetails: any = {
    time: 'calculating travel time',
    distance: '',
    navigationUrl: 'https://www.google.com/maps/dir/?api=1',
  };
  navUrl = 'https://www.google.com/maps/dir/?api=1';
  infoWindowOpened = null;
  previous_info_window = null;
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  public renderOptions = {
    suppressMarkers: true,
  };

  public markerOptions = {
    origin: {
      label: 'You',
      draggable: false,
      waypoints: [],
      icon:"http://image.ibb.co/bZ3wLn/origin.png"
    },
    destination: {
      label: 'Pizza',
      waypoints: [],
      infoWindow: '23.7km,1hour',
      opacity:0
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
    this.infoWindowOpened = null;
    this.previous_info_window = null;
    this.latitude = address.geometry.location.lat();
    this.longitude = address.geometry.location.lng();
    this.showRoute = false;
    this.showMe=true;
    this.address = address.formatted_address;
    this.origin = { lat: this.latitude, lng: this.longitude };
    this.getAddress(this.latitude, this.longitude);
    console.log("On Change-Loc:"+this.latitude+","+this.longitude);
    console.log(this.origin);
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
      alert('No pizza shops around you. Try searching with different location');
    }
  }
  getDirection() {
    this.origin = { lat: 24.799524, lng: 120.975017 };
    this.destination = { lat: 24.799524, lng: 120.975017 };
  }

  processWindow(infoWindow) {
    if (this.previous_info_window == null)
      this.previous_info_window = infoWindow;
    else {
      this.infoWindowOpened = infoWindow;
      this.previous_info_window.close();
    }
    this.previous_info_window = infoWindow;
  }
  close_window() {
    if (this.previous_info_window != null) {
      this.previous_info_window.close();
    }
  }
  drawDirection(dest, infoWindow) {
    console.log(dest);
    this.travelDetails.infoId = dest.place_id;
    this.isCurrent=this.destination.place_id;
    this.destination = {
      lat: dest.geometry.location.lat,
      lng: dest.geometry.location.lng,
    };
    console.log(this.origin);
    console.log(this.destination);
    this.currentPizzaStore = dest;
    this.showRoute = true;
    this.showMe=false;
    const data = {
      origin: this.origin.lat + ',' + this.origin.lng,
      destination: this.destination.lat + ',' + this.destination.lng,
      departure_time: 'now',
    };
    this.travelDetails.infoId = dest.place_id;
    console.log(this.travelDetails.infoId);
    this.travelDetails.navigationUrl = this.navUrl + this.constructNavigation();
    this._pizzaService.getTravelTime(data).subscribe((res) => {
      //console.log(res.results);
      let data = res.results.routes[0].legs[0];
      this.travelDetails.infoId = dest.place_id;
      this.travelDetails.time = data.duration.text;
      this.travelDetails.distance = data.distance.text;
      this.travelDetails.infoId = dest.place_id;
      this.processWindow(infoWindow);
    });
    this.travelDetails.infoId = dest.place_id;
  }
  constructNavigation() {
    const org = '&origin=' + this.origin.lat + ',' + this.origin.lng;
    const dest =
      '&destination=' + this.destination.lat + ',' + this.destination.lng;
    const dirMode = '&dir_action=navigate&travelmode=driving';
    const navParameters = org + dest + dirMode;
    console.log(navParameters);
    return navParameters;
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
