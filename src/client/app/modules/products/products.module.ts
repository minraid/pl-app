import { NgModule } from '@angular/core';

import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
    imports: [ ProductsRoutingModule ],
    exports: [],
    declarations: [ ProductsComponent ],
    providers: [],
})
export class ProductsModule { }
