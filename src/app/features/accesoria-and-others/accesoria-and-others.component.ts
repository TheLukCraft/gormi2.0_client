import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../shared/breadcrumb/breadcrumb.component";
import { ContentSesionShortComponent } from "../../shared/content-section-short/content-section-short.component";
import { ProductsCarouselSmallComponent } from "../../shared/products-carousel-small/products-carousel-small.component";

@Component({
  selector: 'app-accesoria-and-others',
  standalone: true,
  imports: [BreadcrumbComponent, ContentSesionShortComponent, ProductsCarouselSmallComponent],
  templateUrl: './accesoria-and-others.component.html',
  styleUrl: './accesoria-and-others.component.scss'
})
export class AccesoriaAndOthersComponent {

}
