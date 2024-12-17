import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ArticlePageComponent } from './shared/article-page/article-page.component';
import { CobblestoneComponent } from './features/cobblestone/cobblestone.component';
import { TestowyComponent } from './shared/testowy/testowy.component';
import { FencesComponent } from './features/fences/fences.component';
import { PergolasComponent } from './features/pergolas/pergolas.component';
import { AccesoriaAndOthersComponent } from './features/accesoria-and-others/accesoria-and-others.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog/:slug', component: ArticlePageComponent},
  {path: 'kostka-brukowa', component: CobblestoneComponent},
  {path: 'ogrodzenia', component: FencesComponent},
  {path: 'pergole-aluminiowe-i-bioklimatyczne', component: PergolasComponent},
  {path: 'akcesoria-i-inne', component: AccesoriaAndOthersComponent},
  {path: 'kostka-brukowa/produkty', component: TestowyComponent},
];
