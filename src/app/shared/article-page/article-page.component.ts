import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {
  article: Article | undefined;

  articles: Article[] = [
    {
      title: 'Kostka brukowa a płyty tarasowe: Porównanie materiałów',
      description: 'Kostka brukowa jest znana ze swojej wyjątkowej trwałości i odporności na ciężkie warunki atmosferyczne. Wykonana z betonu lub kamienia naturalnego, kostka brukowa jest odporna na duże obciążenia, co czyni ją idealnym wyborem na podjazdy i miejsca parkingowe. Jej struktura zapewnia również długotrwałą stabilność i minimalną konserwację.',
      content: 'Wybór odpowiedniego materiału do zagospodarowania przestrzeni zewnętrznych, takich jak podjazdy, chodniki czy tarasy, może być kluczowym czynnikiem wpływającym na trwałość, estetykę i funkcjonalność tych obszarów. Wśród popularnych rozwiązań znajdują się kostka brukowa i płyty tarasowe. Oba te materiały oferują różnorodne opcje, ale różnią się pod wieloma względami, co może wpłynąć na ostateczną decyzję. W tym artykule przyjrzymy się różnicom w wytrzymałości, estetyce i kosztach między kostką brukową a płytami tarasowymi.',
      link: '/blog/kostka-brukowa-a-plyty-tarasowe-porownanie-materialow',
      imageUrl: '/assets/images/galerie/kostki-brukowe/img8.jpg',
      tags: ['kostka brukowa', 'plyty tarasowe', 'porownanie materialow']
    },
    {
      title: 'Płyty tarasowe: Idealne rozwiązanie dla Twojego ogrodu',
      description: 'Płyty tarasowe to jeden z najbardziej popularnych i funkcjonalnych sposobów na wykończenie przestrzeni ogrodowej. Dzięki swojej trwałości, estetyce oraz łatwości w utrzymaniu, stanowią idealne rozwiązanie dla każdego, kto pragnie stworzyć piękny i wygodny taras. W tym artykule przyjrzymy się bliżej zaletom płyt tarasowych, różnorodności dostępnych materiałów oraz procesowi ich montażu.',
      content: 'Płyty tarasowe to jeden z najbardziej popularnych i funkcjonalnych sposobów na wykończenie przestrzeni ogrodowej. Dzięki swojej trwałości, estetyce oraz łatwości w utrzymaniu, stanowią idealne rozwiązanie dla każdego, kto pragnie stworzyć piękny i wygodny taras. W tym artykule przyjrzymy się bliżej zaletom płyt tarasowych, różnorodności dostępnych materiałów oraz procesowi ich montażu.',
      link: '/blog/plyty-tarasowe-idealne-rozwiazanie-dla-twojego-ogrodu',
      imageUrl: '/assets/images/galerie/ogrody-wystawowe/img1.jpg',
      tags: ['plyty tarasowe', 'idealne rozwiazanie', 'ogrody wystawowe']
    },
    {
      title: 'Nowoczesne trendy w projektowaniu ogrodów: pergole jako kluczowy element stylu i funkcjonalności',
      description: 'GORMI Pergole Aluminiowe Bioklimatyczne to lider na rynku nowoczesnych rozwiązań ogrodowych. Nasze pergole łączą w sobie elegancję z funkcjonalnością, co sprawia, że są idealnym wyborem dla tych, którzy pragną cieszyć się swoim ogrodem przez cały rok. Oferujemy produkty, które dzięki zaawansowanym technologiom, zapewniają optymalny komfort i ochronę przed niekorzystnymi warunkami atmosferycznymi.',
      content: 'Współczesne ogrody przekształcają się w przestrzenie, które nie tylko cieszą oko, ale również oferują funkcjonalność i komfort na najwyższym poziomie. Jednym z kluczowych elementów nowoczesnego ogrodu są pergole, które dzięki swojemu zaawansowanemu designowi i technologii, stają się centralnym punktem każdej zewnętrznej przestrzeni. W artykule przedstawimy najnowsze trendy w projektowaniu ogrodów z wykorzystaniem pergoli, skupiając się na zaletach i innowacyjnych rozwiązaniach oferowanych przez firmę GORMI Pergole Aluminiowe Bioklimatyczne.',
      link: '/blog/nowoczesne-trendy-w-projektowaniu-ogrodow-pergole-jako-kluczowy-element-stylu-i-funkcjonalnosci',
      imageUrl: '/assets/images/galerie/ogrod-libertow/3.webp',
      tags: ['nowoczesne trendy', 'ogrod', 'pergole']
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.article = this.articles.find(article => article.link.endsWith(slug!));
  }
}
