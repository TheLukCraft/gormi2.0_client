import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-all-galleries',
  standalone: true,
  imports: [BreadcrumbComponent, NgFor],
  templateUrl: './all-galleries.component.html',
  styleUrl: './all-galleries.component.scss'
})
export class AllGalleriesComponent {
  galleries = [
    { name: 'Ogród Libertów', path: 'ogrod-libertow' },
    { name: 'Ogród Węgrzyce', path: 'ogrod-wegrzyce' },
  ];

  constructor(private router: Router) {}

  navigateToGallery(path: string) {
    this.router.navigate(['/galerie', path]);
  }
}
