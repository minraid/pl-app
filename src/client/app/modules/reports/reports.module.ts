import { NgModule } from '@angular/core';

import { ReportsComponent } from './components/reports/reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
    imports: [SharedModule, ReportsRoutingModule],
    exports: [],
    declarations: [ReportsComponent],
    providers: [],
})
export class ReportsModule { }
