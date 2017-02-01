import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductComponent } from "./components/product/product.component";

const routes: Routes = [
  {
    path: 'products', component: ProductsComponent,
    children: [{
      path: '', component: ProductsListComponent,
    }, {
      path: ':id', component: ProductComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
}
