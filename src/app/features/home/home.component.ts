import { Component } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { CategoriesComponent } from "./categories/categories.component";
import { LatestsProductsComponent } from "../../shared/latests-products/latests-products.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { LatestsArticlesComponent } from "../../shared/latests-articles/latests-articles.component";
import { ArticleCardComponent } from "../../shared/article-card/article-card.component";
import { ArticlePageComponent } from "../../shared/article-page/article-page.component";
import { SpinnerComponent } from "../../shared/spinner/spinner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, CategoriesComponent, LatestsProductsComponent, AboutUsComponent, LatestsArticlesComponent, ArticlePageComponent, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
