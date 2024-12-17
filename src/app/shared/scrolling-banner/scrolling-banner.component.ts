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
    { name: 'drog-bruk.png', link: 'https://www.drog-bruk.pl' },
    { name: 'libet.png', link: 'https://www.libet.pl' },
    { name: 'pater.png', link: 'https://www.pater.pl' },
    { name: 'semmelrock.png', link: 'https://www.semmelrock.pl' },
    { name: 'settline-logo.png', link: 'https://www.settline.pl' }
  ];
}
