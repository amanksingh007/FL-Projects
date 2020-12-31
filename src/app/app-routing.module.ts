import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartitemsComponent } from './components/cartitems/cartitems.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path:"",component : LoginComponent },
  { path : "products" , component : ProductsComponent },
  { path : "products/:productId" , component : ProductDetailsComponent },
  { path : "usercart", component : CartitemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
