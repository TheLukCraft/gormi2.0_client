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
  {
    path: '', component: HomeComponent,
    data: {
      title: 'Lider w Kostce Brukowej i Architektury Ogrodowej – GORMI',
      description: 'Dystrybutor kostki brukowej, płyt tarasowych i kruszywa dekoracyjnego. Zapraszamy do naszych ogrodów wystawowych.'
     }
  },
  {path: 'blog/:slug', component: ArticlePageComponent},
  {path: 'kostka-brukowa', component: CobblestoneComponent,
    data: {
      title: 'Kostka Brukowa Gormi – Wyjątkowa Trwałość, Estetyka i Szybka Dostawa',
      description: 'Wybierz kostkę brukową od Gormi – trwałe, estetyczne rozwiązania idealne na podjazdy, tarasy i ogrody. Szeroki asortyment, szybka realizacja i profesjonalne doradztwo. Odwiedź nas w Libertowie, Węgrzycach lub Bielsko-Białej!'
    }
  },
  {path: 'ogrodzenia', component: FencesComponent,
    data: {
      title: 'Ogrodzenia Gormi – Styl, Trwałość i Funkcjonalność',
      description: 'Poznaj ofertę ogrodzeń od Gormi – rustykalne i nowoczesne wzory, trwałe materiały i szeroka gama kolorów. Kompleksowe rozwiązania: przęsła, bramy i szybka dostawa. Odwiedź nas w Libertowie, Węgrzycach lub Bielsko-Białej!'
    }
  },
  {path: 'pergole-aluminiowe-i-bioklimatyczne', component: PergolasComponent,
    data: {
      title: 'Pergole Aluminiowe Bioklimatyczne Gormi – Nowoczesność, Komfort i Trwałość',
      description: 'Odkryj pergole aluminiowe bioklimatyczne od Gormi – nowoczesny design, trwałość i funkcjonalność na każdą pogodę. Idealne rozwiązanie dla Twojej przestrzeni na świeżym powietrzu. Łatwa obsługa, energooszczędność i ekologiczne materiały. Sprawdź naszą ofertę!'
    }
  },
  {path: 'akcesoria-i-inne', component: AccesoriaAndOthersComponent,
    data: {
      title: 'Akcesoria i Inne – Beton Architektoniczny, Kamień Dekoracyjny, Ekobordy i Więcej | Gormi',
      description: 'Odkryj akcesoria i inne produkty od Gormi: beton architektoniczny, kamień dekoracyjny, ekobordy, narzędzia brukarskie, oświetlenie ogrodowe i więcej. Trwałość, estetyka i ekologiczne rozwiązania dla Twoich projektów. Sprawdź ofertę!'
    }
  },
  {path: 'kontakt', component: ContactComponent,
    data: {
      title: 'Kontakt – Skontaktuj się z Gormi: Oddziały, Telefon, Formularz',
      description: 'Skontaktuj się z Gormi! Sprawdź nasze oddziały w Libertowie, Węgrzycach i Bielsko-Białej. Zadzwoń, napisz lub odwiedź nas osobiście. Jesteśmy tu, aby Ci pomóc w realizacji Twoich projektów.'
    }
  },

  {path: 'galerie', component: AllGalleriesComponent,
    data: {
      title: 'Galerie Inspiracji – Zobacz Realizacje z Produktami Gormi',
      description: 'Zainspiruj się galeriami Gormi! Obejrzyj realizacje z wykorzystaniem kostki brukowej, płyt tarasowych, ogrodzeń i pergoli. Sprawdź, jak nasze produkty podkreślają piękno przestrzeni ogrodowych i architektury.'
    }
  },
  {path: 'galerie/:path', component: GalleryDetailComponent}

  // documents
  // {path: 'polityka-prywatnosci', component: PrivacyPolicyComponent}
];
