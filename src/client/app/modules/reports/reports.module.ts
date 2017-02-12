import { NgModule } from '@angular/core';

import { ReportsComponent } from './components/reports/reports.component';

import { ReportsRoutingModule } from './reports-routing.module';
import { SharedModule } from "../../../shared/shared.module";
import { FinanceModule } from "../finance/finance.module";

@NgModule({
    imports: [SharedModule, ReportsRoutingModule, FinanceModule],
    exports: [],
    declarations: [ReportsComponent],
    providers: [],
})
export class ReportsModule { }
