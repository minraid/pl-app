import { NgModule } from '@angular/core';

import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductComponent } from "./components/product/product.component";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
  imports: [SharedModule, ProductsRoutingModule],
  exports: [],
  declarations: [ProductsComponent, ProductsListComponent, ProductComponent],
  providers: [],
})
export class ProductsModule {
}
