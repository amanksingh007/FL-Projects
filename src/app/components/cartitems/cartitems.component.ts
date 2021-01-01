import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {
  constructor(private route:ActivatedRoute, private mockService: MockService) { }
  cart:any;
  totalQuantity=0;
  cartTotalPrice=0;
  ngOnInit(): void {
    //this.cart= this.mockService.getUser().products;
    this.calculateTotal();
    this.mockService.addToCart().subscribe( res =>{
      this.cart= this.mockService.getUser().products;
      this.calculateTotal();
    },
    (err:HttpErrorResponse) => {
      this.cart= this.mockService.getUser().products;
      this.calculateTotal();
    })
  }

  calculateTotal(){
    let data=this.mockService.getUser();
    let prc=0;let quan=0;
    for(let i=0;i<data.products.length;i++){
      let product=data.products[i];
      quan+=Number(product.quantity);
      prc+=Number(product.quantity)*Number(product.price);
      console.log(quan,prc);
    }
    this.totalQuantity=quan;
    this.cartTotalPrice=prc;
    console.log("Cal");
    console.log(this.totalQuantity,this.cartTotalPrice);
  }
  removeCartItem(item){
    this.mockService.deleteByCartIdAndProductId(item).subscribe( res => {
      alert("Item-Removed");
    },
    (err : HttpErrorResponse) =>{
      console.log("Could not remove item");
    })
  }

  clearCart(){
    this.mockService.deleteByUserId().subscribe( res =>{
      alert("Cart-Cleared");
    },
    (err:HttpErrorResponse) => {
      console.log("Could not clear cart");
    });
  }

}
