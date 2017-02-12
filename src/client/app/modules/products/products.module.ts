import { NgModule } from '@angular/core';

import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductComponent } from "./components/product/product.component";

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from "../../../shared/shared.module";
import { FinanceModule } from "../finance/finance.module";

@NgModule({
  imports: [SharedModule, ProductsRoutingModule, FinanceModule],
  exports: [],
  declarations: [ProductsComponent, ProductsListComponent, ProductComponent],
  providers: [],
})
export class ProductsModule {
}
