import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  productsApi:string="https://fakestoreapi.com/products"
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.productsApi);
  }
  getProductDetail(id:string){
    return this.http.get(this.productsApi+"/"+id);
  }
}
