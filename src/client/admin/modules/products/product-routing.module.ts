import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.components';

const routes: Routes = [
  {
    path: 'products', component: ProductsComponent,
    children: [{
      path: '', component: ProductListComponent,
    },{
      path: ':id', component: ProductComponent,
    },{
      path: 'new', component: ProductComponent,
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
