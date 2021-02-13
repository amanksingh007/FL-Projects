import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { PizzatrackerComponent } from './components/pizzatracker/pizzatracker.component';

const routes: Routes = [
  { path:"", component : PizzatrackerComponent },
  { path:"responsive", component : ResponsiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
