import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ArticlePageComponent } from './shared/article-page/article-page.component';
import { Forbidden403Component } from './shared/forbidden-403/forbidden-403.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog/:slug', component: ArticlePageComponent},
  {path: '**', component: Forbidden403Component}
];
