import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ProductsRoutingModule } from './product-routing.module';

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.components';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
    imports: [SharedModule, ProductsRoutingModule],
    exports: [],
    declarations: [ProductsComponent, ProductListComponent, ProductComponent],
    providers: [],
})
export class ProductsModule { }
