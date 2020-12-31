import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  constructor(private mockService : MockService,private router:Router) { }

  ngOnInit(): void {
    this.mockService.getProducts().subscribe( res => {
      this.products = res;
      console.log(this.products);
    })
  }

  addToCart(product){

  }
  viewProduct(productId : any){
    this.router.navigateByUrl("products/"+productId)
  }

}
