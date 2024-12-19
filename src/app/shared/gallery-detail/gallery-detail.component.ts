import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-gallery-detail',
  standalone: true,
  imports: [NgFor, NgIf, BreadcrumbComponent],
  templateUrl: './gallery-detail.component.html',
  styleUrl: './gallery-detail.component.scss'
})
export class GalleryDetailComponent implements OnInit {
  images: string[] = [];
  galleryName: string = '';
  selectedImage: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const path = this.route.snapshot.paramMap.get('path');
    this.galleryName = path === 'ogrod-libertow' ? 'Ogród Libertów' : 'Ogród Węgrzyce';
    this.images = Array.from({ length: 5 }, (_, i) => `/assets/images/galerie/${path}/${i + 1}.webp`);
  }

  openDialog(image: string) {
    this.selectedImage = image;
  }

  closeDialog() {
    this.selectedImage = null;
  }
}
