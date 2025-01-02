import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galleries',
  standalone: true,
  imports: [NgFor],
  templateUrl: './galleries.component.html',
  styleUrl: './galleries.component.scss'
})
export class GalleriesComponent {
  galleries = [
    { name: 'Ogród Libertów', path: 'ogrod-libertow' },
    { name: 'Ogród Węgrzce', path: 'ogrod-wegrzyce' }
  ];

  constructor(private router: Router) {}

  navigateToGallery(path: string) {
    this.router.navigate(['/galerie', path]);
  }
}
