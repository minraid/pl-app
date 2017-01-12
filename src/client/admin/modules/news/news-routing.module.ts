import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: 'news', component: NewsComponent,
    children: [{
      path: '', component: NewsListComponent,
      path: ':id', component: PostComponent,
      path: 'new', component: PostComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {
}
