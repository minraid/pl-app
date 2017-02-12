import { NgModule } from '@angular/core';
import { FinanceComponent } from "./components/finance/finance.component";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
    imports: [SharedModule],
    exports: [FinanceComponent],
    declarations: [FinanceComponent],
})
export class FinanceModule { }
