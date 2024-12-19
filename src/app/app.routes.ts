import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ArticlePageComponent } from './shared/article-page/article-page.component';
import { CobblestoneComponent } from './features/cobblestone/cobblestone.component';
import { FencesComponent } from './features/fences/fences.component';
import { PergolasComponent } from './features/pergolas/pergolas.component';
import { AccesoriaAndOthersComponent } from './features/accesoria-and-others/accesoria-and-others.component';
import { ContactComponent } from './features/contact/contact.component';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';
import { GalleryDetailComponent } from './shared/gallery-detail/gallery-detail.component';
import { AllGalleriesComponent } from './shared/all-galleries/all-galleries.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog/:slug', component: ArticlePageComponent},
  {path: 'kostka-brukowa', component: CobblestoneComponent},
  {path: 'ogrodzenia', component: FencesComponent},
  {path: 'pergole-aluminiowe-i-bioklimatyczne', component: PergolasComponent},
  {path: 'akcesoria-i-inne', component: AccesoriaAndOthersComponent},
  {path: 'kontakt', component: ContactComponent},

  {path: 'galerie', component: AllGalleriesComponent},
  {path: 'galerie/:path', component: GalleryDetailComponent}

  // documents
  // {path: 'polityka-prywatnosci', component: PrivacyPolicyComponent}
];
