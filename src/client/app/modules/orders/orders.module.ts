import { NgModule } from '@angular/core';

import { NewOrderComponent } from './components/neworder/neworder.component';
import { OrderComponent } from "./components/order/order.component";

import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from "../../../shared/shared.module";
import { FinanceModule } from "../finance/finance.module";

@NgModule({
    imports: [SharedModule, FinanceModule, OrdersRoutingModule],
    exports: [],
    declarations: [NewOrderComponent, OrderComponent],
    providers: [],
})
export class OrdersModule { }
