import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {
  article: Article | undefined;
  sanitizedContent: SafeHtml = '';

  articles: Article[] = [
    {
      title: 'Kostka brukowa a płyty tarasowe: Porównanie materiałów',
      description: 'Kostka brukowa jest znana ze swojej wyjątkowej trwałości i odporności na ciężkie warunki atmosferyczne. Wykonana z betonu lub kamienia naturalnego, kostka brukowa jest odporna na duże obciążenia, co czyni ją idealnym wyborem na podjazdy i miejsca parkingowe. Jej struktura zapewnia również długotrwałą stabilność i minimalną konserwację.',
      content: `
      <p>Wybór odpowiedniego materiału do zagospodarowania przestrzeni zewnętrznych, takich jak podjazdy, chodniki czy tarasy, może być kluczowym czynnikiem wpływającym na trwałość, estetykę i funkcjonalność tych obszarów. Wśród popularnych rozwiązań znajdują się kostka brukowa i płyty tarasowe. Oba te materiały oferują różnorodne opcje, ale różnią się pod wieloma względami, co może wpłynąć na ostateczną decyzję. W tym artykule przyjrzymy się różnicom w wytrzymałości, estetyce i kosztach między kostką brukową a płytami tarasowymi.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Kostka brukowa</h3>
      <p>Kostka brukowa jest znana ze swojej wyjątkowej trwałości i odporności na ciężkie warunki atmosferyczne. Wykonana z betonu lub kamienia naturalnego, kostka brukowa jest odporna na duże obciążenia, co czyni ją idealnym wyborem na podjazdy i miejsca parkingowe. Jej struktura zapewnia również długotrwałą stabilność i minimalną konserwację.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Płyty tarasowe</h3>
      <p>Płyty tarasowe, chociaż również trwałe, są zwykle wykorzystywane w miejscach o mniejszym obciążeniu, takich jak tarasy czy ścieżki ogrodowe. Mogą być wykonane z betonu, kamienia naturalnego lub ceramiki i są mniej odporne na obciążenia niż kostka brukowa. Płyty tarasowe są bardziej podatne na pęknięcia, jeśli nie są właściwie instalowane na odpowiednio przygotowanym podłożu.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Estetyka kostki brukowej</h3>
      <p>Oferuje dużą różnorodność kolorów, kształtów i wzorów, co umożliwia tworzenie unikalnych i atrakcyjnych wzorów. Kostka brukowa może być układana w różnorodne geometryczne wzory, co dodaje charakteru każdej przestrzeni zewnętrznej.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Estetyka płyt tarasowych</h3>
      <p>Są zazwyczaj większe niż kostki brukowe i dostępne w szerokiej gamie wykończeń – od gładkich po faktury imitujące naturalny kamień. Płyty tarasowe są często wybierane ze względu na ich nowoczesny wygląd i zdolność do stworzenia spójnej, eleganckiej powierzchni.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Koszty kostki brukowej</h3>
      <p>Koszt zakupu i instalacji kostki brukowej może być wyższy niż w przypadku płyt tarasowych, zwłaszcza jeśli wybieramy produkty z wyższej półki lub nietypowe wzory. Jednak jej trwałość i minimalne wymagania konserwacyjne mogą przyczynić się do obniżenia długoterminowych kosztów.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Koszt płyt tarasowych</h3>
      <p>Choć początkowy koszt może być niższy, to płyty tarasowe mogą wymagać częstszej wymiany lub napraw w przypadku uszkodzeń. Instalacja może również wymagać bardziej skomplikowanej przygotowania podłoża, co zwiększa koszty początkowe.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Podsumowanie</h3>
      <p>Decyzja między kostką brukową a płytami tarasowymi powinna być podyktowana specyficznymi potrzebami danego projektu. Kostka brukowa jest najlepsza dla obszarów o wysokim obciążeniu i gdzie trwałość jest priorytetem, podczas gdy płyty tarasowe są idealne dla tych, którzy szukają estetycznie atrakcyjnych rozwiązań do mniej obciążonych obszarów. Rozważając swoje opcje, warto także konsultować się z profesjonalistami, którzy pomogą dopasować wybór do indywidualnych oczekiwań i warunków lokalnych.</p>



      `,
      link: '/blog/kostka-brukowa-a-plyty-tarasowe-porownanie-materialow',
      imageUrl: '/assets/images/galerie/kostki-brukowe/img8.jpg',
      tags: ['kostka brukowa', 'plyty tarasowe', 'porownanie materialow']
    },
    {
      title: 'Płyty tarasowe: Idealne rozwiązanie dla Twojego ogrodu',
      description: 'Płyty tarasowe to jeden z najbardziej popularnych i funkcjonalnych sposobów na wykończenie przestrzeni ogrodowej. Dzięki swojej trwałości, estetyce oraz łatwości w utrzymaniu, stanowią idealne rozwiązanie dla każdego, kto pragnie stworzyć piękny i wygodny taras. W tym artykule przyjrzymy się bliżej zaletom płyt tarasowych, różnorodności dostępnych materiałów oraz procesowi ich montażu.',
      content: `
      <p>Płyty tarasowe to jeden z najbardziej popularnych i funkcjonalnych sposobów na wykończenie przestrzeni ogrodowej. Dzięki swojej trwałości, estetyce oraz łatwości w utrzymaniu, stanowią idealne rozwiązanie dla każdego, kto pragnie stworzyć piękny i wygodny taras. W tym artykule przyjrzymy się bliżej zaletom płyt tarasowych, różnorodności dostępnych materiałów oraz procesowi ich montażu.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Zalety płyt tarasowych</h3>
      <p>Trwałość i odporność: Płyty tarasowe są znane ze swojej wytrzymałości. Wykonane z betonu, kamienia naturalnego czy kompozytu, są odporne na zmienne warunki atmosferyczne, w tym mróz, deszcz i promieniowanie UV. Dzięki temu zachowują swój wygląd i funkcjonalność przez wiele lat. Łatwość w utrzymaniu: W porównaniu do drewnianych tarasów, które wymagają regularnej konserwacji i impregnowania, płyty tarasowe są znacznie mniej wymagające. Wystarczy je regularnie zamiatać i myć wodą, aby zachowały swój estetyczny wygląd. Estetyka: Płyty tarasowe dostępne są w szerokiej gamie kolorów, kształtów i faktur, co pozwala na dostosowanie ich do stylu i charakteru ogrodu. Niezależnie od tego, czy preferujesz nowoczesny, minimalistyczny design, czy bardziej rustykalny wygląd, z pewnością znajdziesz coś dla siebie. Funkcjonalność: Dzięki swojej stabilności i antypoślizgowej powierzchni, płyty tarasowe zapewniają bezpieczeństwo użytkowania. Są idealne do tworzenia ścieżek, podjazdów, a także miejsc wypoczynkowych, gdzie można ustawić meble ogrodowe, grill czy leżaki.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Różnorodność materiałów</h3>
      <p>Wybór odpowiedniego materiału na płyty tarasowe jest kluczowy dla osiągnięcia pożądanego efektu estetycznego i funkcjonalnego. Oto najpopularniejsze materiały: Beton: Płyty betonowe są jednym z najbardziej ekonomicznych rozwiązań. Są dostępne w różnych kolorach i wzorach, a dzięki nowoczesnym technologiom mogą imitować wygląd kamienia naturalnego lub drewna. Kamień naturalny: Granit, piaskowiec, bazalt – to tylko niektóre z kamieni używanych do produkcji płyt tarasowych. Kamień naturalny jest niezwykle trwały i odporny na warunki atmosferyczne, a jego unikalna faktura dodaje elegancji każdemu ogrodowi. Kompozyt: Płyty kompozytowe to nowoczesne rozwiązanie, które łączy w sobie zalety drewna i plastiku. Są odporne na wilgoć, pleśń i owady, a przy tym nie wymagają konserwacji.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Montaż płyt tarasowych</h3>
      <p>Montaż płyt tarasowych jest stosunkowo prosty, ale wymaga odpowiedniego przygotowania podłoża oraz precyzyjnego ułożenia. Oto kilka kroków, które warto przestrzegać: Przygotowanie podłoża: Kluczowym etapem jest przygotowanie odpowiedniego podłoża. Należy usunąć warstwę gleby na głębokość około 20-30 cm, a następnie wyrównać teren i wykonać podsypkę z piasku i żwiru, którą należy dobrze ubić. Ułożenie płyt: Płyty układamy na przygotowanej podsypce, zaczynając od narożnika tarasu. Ważne jest, aby zachować równomierne odstępy między płytami, co umożliwi swobodny przepływ wody i zapobiegnie powstawaniu kałuż. Zakończenie prac: Po ułożeniu wszystkich płyt, przestrzenie między nimi można wypełnić piaskiem lub specjalną fugą do płyt tarasowych. Następnie całość należy ponownie ubić i dokładnie oczyścić powierzchnię.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Podsumowanie</h3>
      <p>Płyty tarasowe to doskonałe rozwiązanie dla każdego ogrodu. Dzięki swojej trwałości, estetyce i łatwości w utrzymaniu, stanowią idealny wybór dla osób pragnących stworzyć funkcjonalną i piękną przestrzeń wypoczynkową. Bogactwo dostępnych materiałów i wzorów pozwala na dopasowanie tarasu do indywidualnych potrzeb i upodobań, a prosty montaż sprawia, że każdy może cieszyć się nowym tarasem bez konieczności angażowania specjalistów.</p>


      `,
      link: '/blog/plyty-tarasowe-idealne-rozwiazanie-dla-twojego-ogrodu',
      imageUrl: '/assets/images/galerie/ogrody-wystawowe/img1.jpg',
      tags: ['plyty tarasowe', 'idealne rozwiazanie', 'ogrody wystawowe']
    },
    {
      title: 'Nowoczesne trendy w projektowaniu ogrodów: pergole jako kluczowy element stylu i funkcjonalności',
      description: 'GORMI Pergole Aluminiowe Bioklimatyczne to lider na rynku nowoczesnych rozwiązań ogrodowych. Nasze pergole łączą w sobie elegancję z funkcjonalnością, co sprawia, że są idealnym wyborem dla tych, którzy pragną cieszyć się swoim ogrodem przez cały rok. Oferujemy produkty, które dzięki zaawansowanym technologiom, zapewniają optymalny komfort i ochronę przed niekorzystnymi warunkami atmosferycznymi.',
      content: `
      <p>Współczesne ogrody przekształcają się w przestrzenie, które nie tylko cieszą oko, ale również oferują funkcjonalność i komfort na najwyższym poziomie. Jednym z kluczowych elementów nowoczesnego ogrodu są pergole, które dzięki swojemu zaawansowanemu designowi i technologii, stają się centralnym punktem każdej zewnętrznej przestrzeni. W artykule przedstawimy najnowsze trendy w projektowaniu ogrodów z wykorzystaniem pergoli, skupiając się na zaletach i innowacyjnych rozwiązaniach oferowanych przez firmę GORMI Pergole Aluminiowe Bioklimatyczne.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Pergole aluminiowe bioklimatyczne - przyszłość Twojego ogrodu</h3>
      <p>GORMI Pergole Aluminiowe Bioklimatyczne to lider na rynku nowoczesnych rozwiązań ogrodowych. Nasze pergole łączą w sobie elegancję z funkcjonalnością, co sprawia, że są idealnym wyborem dla tych, którzy pragną cieszyć się swoim ogrodem przez cały rok. Oferujemy produkty, które dzięki zaawansowanym technologiom, zapewniają optymalny komfort i ochronę przed niekorzystnymi warunkami atmosferycznymi.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Nowoczesny design - estetyka i elegancja</h3>
      <p>Nasze pergole wyróżniają się nowoczesnym i eleganckim wyglądem, który doskonale komponuje się z każdym rodzajem architektury. Minimalistyczne linie, wysokiej jakości materiały oraz szeroka gama kolorystyczna sprawiają, że pergole GORMI mogą być idealnie dopasowane do indywidualnych potrzeb i gustów klientów. Niezależnie od tego, czy Twój dom jest utrzymany w stylu klasycznym, czy nowoczesnym, nasze pergole będą doskonałym uzupełnieniem Twojej przestrzeni zewnętrznej.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Trwałość i niezawodność - inwestycja na lata</h3>
      <p>Pergole aluminiowe GORMI są wykonane z najwyższej jakości aluminium, co gwarantuje ich wyjątkową trwałość i odporność na korozję. Dzięki temu, nasze produkty zachowują swój estetyczny wygląd i funkcjonalność przez wiele lat, niezależnie od warunków atmosferycznych. Inwestycja w pergolę GORMI to gwarancja długowieczności i niezawodności.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Łatwa obsługa - komfort na wyciągnięcie ręki</h3>
      <p>Jednym z najważniejszych aspektów nowoczesnych pergoli jest ich łatwa obsługa. Nasze pergole są wyposażone w zaawansowane systemy sterowania, które umożliwiają łatwe dostosowanie ilości światła i wentylacji za pomocą jednego przycisku. Intuicyjne i wygodne w użyciu, nasze systemy pozwalają na pełne cieszenie się komfortem i funkcjonalnością przestrzeni na świeżym powietrzu.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Dostępność i wsparcie</h3>
      <p>Firma GORMI oferuje swoje usługi w kilku lokalizacjach w Polsce, w tym w Libertowie koło Krakowa, Węgrzycach koło Krakowa oraz Bielsko-Białej. Nasi doradcy są zawsze gotowi, aby pomóc w wyborze idealnej pergoli, odpowiadając na wszelkie pytania i oferując profesjonalne wsparcie na każdym etapie zakupu i montażu.</p>
      </br>

      <h3 class="text-xl md:text-2xl font-semibold text-primary leading-tight mb-6">Podsumowanie</h3>
      <p>Nowoczesne pergole aluminiowe bioklimatyczne GORMI to idealne rozwiązanie dla każdego, kto pragnie stworzyć w swoim ogrodzie przestrzeń łączącą styl, funkcjonalność i komfort. Dzięki eleganckiemu designowi, trwałości i łatwości obsługi, nasze pergole są inwestycją, która przynosi radość i satysfakcję przez wiele lat. Odwiedź naszą stronę internetową lub jeden z naszych oddziałów, aby dowiedzieć się więcej o naszych produktach i znaleźć pergolę idealnie dopasowaną do Twoich potrzeb.</p>




      `,
      link: '/blog/nowoczesne-trendy-w-projektowaniu-ogrodow-pergole-jako-kluczowy-element-stylu-i-funkcjonalnosci',
      imageUrl: '/assets/images/galerie/ogrod-libertow/3.webp',
      tags: ['nowoczesne trendy', 'ogrod', 'pergole']
    }
  ];

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.article = this.articles.find(article => article.link.endsWith(slug!));
    if (this.article) {
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.article.content);
    }
  }
}
