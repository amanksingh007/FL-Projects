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

  ngOnInit(): void {
    console.log(this.mockService.getUser());
    this.mockService.addToCart().subscribe( res =>{
      console.log(res);
    },
    (err:HttpErrorResponse)=>{
      console.log(err);
    })
  }
}
