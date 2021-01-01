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
  ngOnInit(): void {
    console.log(this.mockService.getUser());
    this.cart= this.mockService.getUser().products;
    console.log(this.cart);
    this.mockService.addToCart().subscribe( res =>{
      console.log(res);
      this.cart= this.mockService.getUser().products;
      console.log(this.cart);
    },
    (err:HttpErrorResponse) => {
      console.log(err);
      this.cart= this.mockService.getUser().products;
      console.log(this.cart);
    })
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
