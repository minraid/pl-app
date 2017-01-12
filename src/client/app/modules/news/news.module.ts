import { NgModule } from '@angular/core';

import { NewsComponent } from './components/news/news.component';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
    imports: [NewsRoutingModule],
    exports: [],
    declarations: [NewsComponent],
    providers: [],
})
export class NewsModule { }
