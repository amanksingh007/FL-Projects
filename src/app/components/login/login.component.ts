import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private mockService : MockService) { }

  ngOnInit(): void {
  }
  startShopping(data){
    console.log(data);
    this.mockService.initUser(data);
    this.router.navigateByUrl("/products");
  }

}
