import { Component } from '@angular/core';
import { ArticleCardComponent } from "../article-card/article-card.component";
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-latests-articles',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './latests-articles.component.html',
  styleUrl: './latests-articles.component.scss'
})
export class LatestsArticlesComponent {

  articles: Article[] = [
    {
      title: 'Kostka brukowa a płyty tarasowe: Porównanie materiałów',
      description: 'Kostka brukowa jest znana ze swojej wyjątkowej trwałości i odporności na ciężkie warunki atmosferyczne. Wykonana z betonu lub kamienia naturalnego, kostka brukowa jest odporna na duże obciążenia, co czyni ją idealnym wyborem na podjazdy i miejsca parkingowe. Jej struktura zapewnia również długotrwałą stabilność i minimalną konserwację.',
      content: 'Dolore laboris culpa est sint veniam adipisicing elit cupidatat adipisicing exercitation nulla. Cupidatat sint tempor amet et est duis commodo do sit ullamco in voluptate labore qui. Adipisicing magna proident Lorem magna nostrud laboris velit quis labore id laborum.',
      link: '/blog/kostka-brukowa-a-plyty-tarasowe-porownanie-materialow',
      imageUrl: '/assets/images/galerie/kostki-brukowe/img8.jpg',
      tags: ['kostka brukowa', 'plyty tarasowe', 'porownanie materialow']
    },
    {
      title: 'Płyty tarasowe: Idealne rozwiązanie dla Twojego ogrodu',
      description: 'Płyty tarasowe to jeden z najbardziej popularnych i funkcjonalnych sposobów na wykończenie przestrzeni ogrodowej. Dzięki swojej trwałości, estetyce oraz łatwości w utrzymaniu, stanowią idealne rozwiązanie dla każdego, kto pragnie stworzyć piękny i wygodny taras. W tym artykule przyjrzymy się bliżej zaletom płyt tarasowych, różnorodności dostępnych materiałów oraz procesowi ich montażu.',
      content: 'Adipisicing excepteur excepteur culpa pariatur ut dolor voluptate sint ex mollit voluptate. Nostrud reprehenderit minim dolore irure. Cillum dolore nisi duis excepteur cupidatat elit. Nisi ex amet incididunt do laboris officia irure sit do minim. Sint reprehenderit consectetur amet elit consectetur commodo enim est aute occaecat eu quis non. Magna ad reprehenderit ullamco minim enim amet occaecat non enim ullamco aliqua laboris consectetur non. Adipisicing labore consectetur duis veniam quis sit tempor fugiat irure fugiat tempor cupidatat.',
      link: '/blog/plyty-tarasowe-idealne-rozwiazanie-dla-twojego-ogrodu',
      imageUrl: '/assets/images/galerie/ogrody-wystawowe/img1.jpg',
      tags: ['plyty tarasowe', 'idealne rozwiazanie', 'ogrody wystawowe']
    },
    {
      title: 'Nowoczesne trendy w projektowaniu ogrodów: pergole jako kluczowy element stylu i funkcjonalności',
      description: 'GORMI Pergole Aluminiowe Bioklimatyczne to lider na rynku nowoczesnych rozwiązań ogrodowych. Nasze pergole łączą w sobie elegancję z funkcjonalnością, co sprawia, że są idealnym wyborem dla tych, którzy pragną cieszyć się swoim ogrodem przez cały rok. Oferujemy produkty, które dzięki zaawansowanym technologiom, zapewniają optymalny komfort i ochronę przed niekorzystnymi warunkami atmosferycznymi.',
      content: 'Sunt cillum in consequat sunt aliqua. Fugiat laboris nostrud id est qui qui elit laborum ad eu nostrud. Enim qui reprehenderit aliquip laborum ullamco aute exercitation occaecat laboris dolor anim. Pariatur minim id aliqua pariatur esse incididunt Lorem minim officia est ut. Ea amet enim cupidatat voluptate tempor tempor excepteur ea tempor nisi quis. Consequat anim ea magna ullamco commodo irure.',
      link: '/blog/nowoczesne-trendy-w-projektowaniu-ogrodow-pergole-jako-kluczowy-element-stylu-i-funkcjonalnosci',
      imageUrl: '/assets/images/galerie/ogrod-libertow/3.webp',
      tags: ['nowoczesne trendy', 'projektowanie ogrodow', 'pergole']
    }
  ];
}
