import { NgModule } from '@angular/core';

import { OrdersComponent } from './components/orders/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
    imports: [OrdersRoutingModule],
    exports: [],
    declarations: [OrdersComponent],
    providers: [],
})
export class OrdersModule { }
