import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ProductCardSmallComponent } from '../product-card-small/product-card-small.component';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-carousel-small',
  standalone: true,
  imports: [ProductCardSmallComponent, NgFor, CommonModule, RouterLink],
  templateUrl: './products-carousel-small.component.html',
  styleUrl: './products-carousel-small.component.scss'
})
  export class ProductsCarouselSmallComponent implements OnInit {
    @Input() defaultCategory: string = '';
     products = [
        { name: 'Umbriano, brązowo-beżowy', price: '599 zł/m2', lowestPrice: '550 zł/m2', image: '/assets/images/produkty/kostka-1.jpg', category: 'Kostka brukowa' },
        { name: 'Umbriano, grafitowo-biały', price: '499 zł/m2', lowestPrice: '480 zł/m2', image: '/assets/images/produkty/kostka-2.jpg', category: 'Kostka brukowa' },
        { name: 'Umbriano, kwarcytowo - biały', price: '599 zł/m2', lowestPrice: '550 zł/m2', image: '/assets/images/produkty/kostka-3.jpg', category: 'Kostka brukowa' },
        { name: 'Umbriano, stalowo-grafitowy', price: '499 zł/m2', lowestPrice: '480 zł/m2', image: '/assets/images/produkty/kostka-4.jpg', category: 'Kostka brukowa' },
        { name: 'Senso Eco, bello', price: '599 zł/m2', lowestPrice: '550 zł/m2', image: '/assets/images/produkty/kostka-5.jpg', category: 'Kostka brukowa' },
        { name: 'Senso Eco, margo', price: '499 zł/m2', lowestPrice: '480 zł/m2', image: '/assets/images/produkty/kostka-6.jpg', category: 'Kostka brukowa' },
        { name: 'Senso Eco, platino', price: '599 zł/m2', lowestPrice: '550 zł/m2', image: '/assets/images/produkty/kostka-7.jpg', category: 'Kostka brukowa' },
        { name: 'Mayore, luce nero', price: '59 zł/m2', lowestPrice: '59 zł/szt', image: '/assets/images/produkty/plyta-1.jpg', category: 'Płyty tarasowe' },
        { name: 'Mayore, platino', price: '58 zł/m2', lowestPrice: '58 zł/szt', image: '/assets/images/produkty/plyta-2.jpg', category: 'Płyty tarasowe' },
        { name: 'Płyta PORCELANI Beton Architektoniczny Jasnoszary', price: '45 zł/szt', lowestPrice: '45 zł/m2', image: '/assets/images/produkty/płyta-3.jpg', category: 'Płyty tarasowe' },
        { name: 'Płyta Tarasowa PORCELANI Drewno', price: '47 zł/szt', lowestPrice: '47 zł/szt', image: '/assets/images/produkty/płyta-4.jpg', category: 'Płyty tarasowe' },
        { name: 'Płyta Tarasowa PORCELANI Kamień', price: '45 zł/szt', lowestPrice: '45 zł/szt', image: '/assets/images/produkty/płyta-5.jpg', category: 'Płyty tarasowe' },
        { name: 'Płyta STARGRES DOWNTOWN GREY', price: '46 zł/szt', lowestPrice: '46 zł/szt', image: '/assets/images/produkty/płyta-6.jpg', category: 'Płyty tarasowe' },
        { name: 'Ogrodzenie Panelowe Palisadowe Ocynkowane', price: '499 zł/m2', lowestPrice: '470 zł/m2', image: '/assets/images/produkty/ogrodzenie-1.webp', category: 'Ogrodzenia' },
        { name: 'Brama przesuwna palisadowa', price: '6800 zł', lowestPrice: '6500 zł', image: '/assets/images/produkty/ogrodzenie-2.jpg', category: 'Ogrodzenia' },
        { name: 'Ogrodzenie panelowe bez podmurówki ', price: '107zł/mb', lowestPrice: '107 zł/mb', image: '/assets/images/produkty/ogrodzenie-3.jpg', category: 'Ogrodzenia' },
        { name: 'Furtka HOME INCLUSIVE', price: '1500 zł', lowestPrice: '1500 zł', image: '/assets/images/produkty/ogrodzenie-3.jpg', category: 'Ogrodzenia' },
        { name: 'Furtka MODERN AW.10.103/P.', price: '2100 zł', lowestPrice: '2100 zł', image: '/assets/images/produkty/ogrodzenie-4.jpg', category: 'Ogrodzenia' },
        { name: 'Pergola Tarasowa Ogrodowa Zadaszenie na Taras Deluxe Gutroof', price: '12000 zł', lowestPrice: '12000 zł', image: '/assets/images/produkty/pergola.webp', category: 'Pergole' },
        { name: 'Pergola Luna', price: '1999 zł', lowestPrice: '1999 zł', image: '/assets/images/produkty/pergola-2.jpg', category: 'Pergole' },
        { name: 'Pergola Henley', price: '1650 zł', lowestPrice: '1500 zł', image: '/assets/images/produkty/pergola-3.jpg', category: 'Pergole' },
        { name: 'Pergola Siena z dachem orientalnym', price: '799 zł', lowestPrice: '799 zł', image: '/assets/images/produkty/pergola-4.jpg', category: 'Pergole' },
        { name: 'Kogut Tillroy', price: '44 zł', lowestPrice: '44 zł', image: '/assets/images/produkty/kogut.jpg', category: 'Akcesoria i inne' },
        { name: 'Obelisk Modrzewiowy z Kulą', price: '299 zł', lowestPrice: '250 zł', image: '/assets/images/produkty/obelisk.jpg', category: 'Akcesoria i inne' },
        { name: 'Kompostownik', price: '199 zł', lowestPrice: '199 zł', image: '/assets/images/produkty/kompostownik.jpg', category: 'Akcesoria i inne' },
        { name: 'Donica sześciokątna', price: '99 zł', lowestPrice: '99 zł', image: '/assets/images/produkty/donica.jpg', category: 'Akcesoria i inne' },
        { name: 'Kratka Oslo', price: '170 zł', lowestPrice: '170 zł', image: '/assets/images/produkty/kratka.jpg', category: 'Akcesoria i inne' },
        { name: 'Ścianka balkonowa Larix modułowa', price: '150 zł', lowestPrice: '150 zł', image: '/assets/images/produkty/scianka.jpg', category: 'Akcesoria i inne' },
        { name: 'Kratka Premier', price: '89 zł', lowestPrice: '89 zł', image: '/assets/images/produkty/kratka.jpg', category: 'Akcesoria i inne' },
      ];

      categories = ['Kostka brukowa', 'Płyty tarasowe', 'Ogrodzenia', 'Pergole', 'Akcesoria i inne'];
      selectedCategory = '';
      filteredProducts: any[] = [];
      visibleCards = 1;
      currentIndex = 0;

      @ViewChild('carousel', { static: false }) carousel!: ElementRef;
      isLoading = true; // Spinner state

      constructor(private cdr: ChangeDetectorRef) {}

      ngOnInit(): void {
        // Sprawdzenie, czy defaultCategory jest ustawione
        this.selectedCategory = this.defaultCategory || this.categories[0];
        this.filterByCategory(this.selectedCategory);
        this.updateVisibleCards();

        setTimeout(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
        }, 100);
      }


      @HostListener('window:resize', [])
      onResize(): void {
        this.updateVisibleCards();
      }

      updateVisibleCards(): void {
        const width = window.innerWidth;
        if (width >= 1024) {
          this.visibleCards = 4;
        } else if (width >= 768) {
          this.visibleCards = 3;
        } else {
          this.visibleCards = 1;
        }
        this.resetCarousel();
      }

      filterByCategory(category: string): void {
        this.selectedCategory = category;
        this.filteredProducts = this.products.filter(product => product.category === category);
        this.resetCarousel();
      }

      scrollCarousel(direction: number): void {
        const carouselElement = this.carousel.nativeElement as HTMLElement;
        const cardWidth = carouselElement.firstElementChild?.getBoundingClientRect().width || 0;

        this.currentIndex += direction;

        // Obsługa pętli
        const maxIndex = this.filteredProducts.length - this.visibleCards;
        if (this.currentIndex < 0) {
          this.currentIndex = maxIndex;
        } else if (this.currentIndex > maxIndex) {
          this.currentIndex = 0;
        }

        const offset = this.currentIndex * cardWidth;
        carouselElement.style.transform = `translateX(-${offset}px)`;
      }


      resetCarousel(): void {
        this.currentIndex = 0;
        if (this.carousel) {
          const carouselElement = this.carousel.nativeElement as HTMLElement;
          carouselElement.style.transform = `translateX(0px)`;
        }
      }

}
