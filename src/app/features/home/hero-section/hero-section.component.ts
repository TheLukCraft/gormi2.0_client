import { Component, OnInit } from '@angular/core';
import { Carousel } from 'flowbite';
import type { CarouselInterface, CarouselItem, CarouselOptions, InstanceOptions } from 'flowbite';
import { Slide1Component } from "./slide-1/slide-1.component";
import { Slide2Component } from "./slide-2/slide-2.component";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [Slide1Component],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  private carousel!: CarouselInterface;

  ngOnInit(): void {
    const carouselElement: HTMLElement | null = document.getElementById('hero-carousel');

    if (!carouselElement) {
      console.error('Nie znaleziono elementu karuzeli.');
      return; // Wyjdź z funkcji, jeśli element nie istnieje
    }

    const items = [
      {
        position: 0,
        el: document.getElementById('carousel-item-1') as HTMLElement | null,
      },
      {
        position: 1,
        el: document.getElementById('carousel-item-2') as HTMLElement | null,
      },
      {
        position: 2,
        el: document.getElementById('carousel-item-3') as HTMLElement | null,
      },
    ];

    // Filtrowanie elementów, które są `null`
    const validItems = items.filter(item => item.el !== null) as { position: number; el: HTMLElement }[];

    if (validItems.length === 0) {
      console.error('Nie znaleziono żadnych elementów karuzeli.');
      return;
    }

    const options = {
      interval: 10000,
    };

    this.carousel = new Carousel(carouselElement, validItems, options);
    this.carousel.cycle();
  }


}
