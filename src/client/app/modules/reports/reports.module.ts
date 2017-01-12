import { NgModule } from '@angular/core';

import { ReportsComponent } from './components/reports/reports.component';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
    imports: [ReportsRoutingModule],
    exports: [],
    declarations: [ReportsComponent],
    providers: [],
})
export class ReportsModule { }
