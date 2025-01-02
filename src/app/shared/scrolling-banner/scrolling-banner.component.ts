import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scrolling-banner',
  standalone: true,
  imports: [NgFor],
  templateUrl: './scrolling-banner.component.html',
  styleUrl: './scrolling-banner.component.scss'
})
export class ScrollingBannerComponent {
  logos: { name: string; link: string }[] = [
    { name: 'drog-bruk.webp', link: 'https://www.drogbruk.pl' },
    { name: 'libet.webp', link: 'https://www.libet.pl' },
    { name: 'pater.webp', link: 'https://kostkapater.pl/' },
    { name: 'semmelrock.webp', link: 'https://www.semmelrock.pl' },
    { name: 'settline-logo.webp', link: 'https://www.settline.pl' }
  ];
}
