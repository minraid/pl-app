import { NgModule } from '@angular/core';

import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
    imports: [OrdersRoutingModule],
    exports: [],
    declarations: [OrdersComponent],
    providers: [],
})
export class OrdersModule { }
