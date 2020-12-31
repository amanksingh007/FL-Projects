
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:string=''
  productDetails:any;
  constructor(private route:ActivatedRoute, private mockService: MockService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get("productId");
    this.mockService.getProductDetail(this.productId).subscribe( res =>{
      this.productDetails = res;
      console.log(this.productDetails);
    })
    
  }

}
