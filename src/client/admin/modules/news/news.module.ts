import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NewsRoutingModule } from './news-routing.module';

import { NewsComponent } from './components/news/news.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
    imports: [SharedModule, NewsRoutingModule],
    exports: [],
    declarations: [NewsComponent, NewsListComponent, PostComponent],
    providers: [],
})
export class NewsModule { }
