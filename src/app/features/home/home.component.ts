import { Component } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { CategoriesComponent } from "./categories/categories.component";
import { LatestsProductsComponent } from "../../shared/latests-products/latests-products.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { LatestsArticlesComponent } from "../../shared/latests-articles/latests-articles.component";
import { GalleriesComponent } from "../../shared/galleries/galleries.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, CategoriesComponent, LatestsProductsComponent, AboutUsComponent, LatestsArticlesComponent, GalleriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
