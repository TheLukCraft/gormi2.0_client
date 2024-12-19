import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../shared/breadcrumb/breadcrumb.component";
import { ContentSectionComponentComponent } from "../../shared/content-section/content-section.component";
import { ScrollingBannerComponent } from "../../shared/scrolling-banner/scrolling-banner.component";
import { CtaBannerComponent } from "../../shared/cta-banner/cta-banner.component";
import { ContentSesionShortComponent } from "../../shared/content-section-short/content-section-short.component";
import { LatestsArticlesComponent } from "../../shared/latests-articles/latests-articles.component";
import { ProductsCarouselSmallComponent } from "../../shared/products-carousel-small/products-carousel-small.component";
import { GalleriesComponent } from "../../shared/galleries/galleries.component";

@Component({
  selector: 'app-fences',
  standalone: true,
  imports: [BreadcrumbComponent, ContentSectionComponentComponent, ScrollingBannerComponent, CtaBannerComponent, ContentSesionShortComponent, LatestsArticlesComponent, ProductsCarouselSmallComponent, GalleriesComponent],
  templateUrl: './fences.component.html',
  styleUrl: './fences.component.scss'
})
export class FencesComponent {

}
