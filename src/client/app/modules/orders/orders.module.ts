import { NgModule } from '@angular/core';

import { NewOrderComponent } from './components/neworder/neworder.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderComponent } from "./components/order/order.component";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
    imports: [SharedModule, OrdersRoutingModule],
    exports: [],
    declarations: [NewOrderComponent, OrderComponent],
    providers: [],
})
export class OrdersModule { }
