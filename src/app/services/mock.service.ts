import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class MockService {
  service:string=environment.api;
  productsApi:string="https://fakestoreapi.com/products";
  currentUser: any ={
    user:
      {
        userId:"",
        userName: "Girijamba",
        userPassword: "*****",
        mobileNo: "8748887542",
        address:
          {
            addressId:"8897",
            buildingNo:125,
            streetName:"ksc",
            area:"VRpuram",
            city:"Banglore",
            state:"Karnataka",
            zip:100
          }
        ,
        userType:"salesrep"
      }
      ,
    products:[],
      cartTotalPrice:0,
      totalQuantity:0
  
  }
  
  constructor(private http: HttpClient) { }

  initUser(info){
    let user = this.currentUser.user;
    user.userId=info.userId;
    user.address.state = info.state;
    user.address.city = info.city;
    user.address.zip = info.zip;
    //console.log(this.currentUser);
    this.saveUser();
  }

  isLoggedIn(){
    if(localStorage.getItem("user")!=null) return true;
    else return false;
  }

  getUser(){
    return JSON.parse(localStorage.getItem("user"));
  }

  saveUser(){
    localStorage.setItem("user",JSON.stringify(this.currentUser));
  }

  getProducts(){
    return this.http.get(this.productsApi);
  }
  getProductDetail(id:string){
    return this.http.get(this.productsApi+"/"+id);
  }

  addToLocalCart(product){
    let item= {
      productName:product.title,
      price:product.price,
      image:product.image,
      quantity:1,
      manufacturer:"XYZ",
      specification:product.description,
      category:product.category
    };
    this.currentUser = this.getUser();
    this.currentUser.products.push(item);
    console.log(this.currentUser);
    this.saveUser();
  }
  addToCart(){
    const api=this.service+"/addCart";
    let data=this.getUser();
    const addressId = uuid.v4();
    console.log(addressId);
    data.user.address.addressId = addressId;
    return this.http.post(api,data);
  }
  getCart(userId:string){
    
  }

  getCartByProductId(data){

  }

  deleteByCartIdAndProductId(){

  }
  deleteByUserId(userId){

  }
}
