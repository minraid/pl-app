import { NgModule } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";
import { OrderRoutingModule } from "./orders-routing.module";
import { OrderComponent } from "./components/order/order.component";

@NgModule({
    imports: [SharedModule, OrderRoutingModule],
    exports: [],
    declarations: [OrderComponent],
    providers: [],
})
export class OrdersModule { }
