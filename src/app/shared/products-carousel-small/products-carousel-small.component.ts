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
        { name: 'Mayore, luce nero', price: '399 zł/m2', lowestPrice: '390 zł/m2', image: '/assets/images/produkty/plyta-1.jpg', category: 'Płyty tarasowe' },
        { name: 'Mayore, platino', price: '599 zł/m2', lowestPrice: '580 zł/m2', image: '/assets/images/produkty/plyta-2.jpg', category: 'Płyty tarasowe' },
        { name: 'Ogrodzenie Panelowe Palisadowe Ocynkowane', price: '499 zł/m2', lowestPrice: '470 zł/m2', image: '/assets/images/produkty/ogrodzenie-1.webp', category: 'Ogrodzenia' },
        { name: 'Pergola Tarasowa Ogrodowa Zadaszenie na Taras Deluxe Gutroof', price: '12000 zł', lowestPrice: '12000 zł', image: '/assets/images/produkty/pergola.webp', category: 'Pergole' },
        { name: 'Kogut Tillroy', price: '44 zł', lowestPrice: '44 zł', image: '/assets/images/produkty/kogut.jpg', category: 'Akcesoria i inne' },
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
