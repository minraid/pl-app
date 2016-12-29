import { NgModule } from '@angular/core';

import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
    imports: [NewsRoutingModule],
    exports: [],
    declarations: [NewsComponent],
    providers: [],
})
export class NewsModule { }
