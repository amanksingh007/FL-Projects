import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockService } from './services/mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopping';
  loggedIn:boolean=false;
  constructor(private router : Router, private mockService : MockService){}
  ngOnInit(): void {
    this.loggedIn=this.mockService.isLoggedIn();
  }
  viewCart(){
    this.router.navigateByUrl("/usercart");
  }

  logout(){
    localStorage.removeItem("user");
    this.loggedIn=false;
    this.router.navigateByUrl("/");
  }
  checkUser(){
    this.loggedIn= this.mockService.isLoggedIn();
  }
}
