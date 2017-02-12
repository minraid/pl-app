import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewOrderComponent } from './components/neworder/neworder.component';
import { OrderComponent } from "./components/order/order.component";

const routes: Routes = [
  { path: 'order', component: NewOrderComponent },
  { path: 'order/:id', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule { }
