import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-small',
  standalone: true,
  imports: [],
  templateUrl: './product-card-small.component.html',
  styleUrl: './product-card-small.component.scss'
})
export class ProductCardSmallComponent {
  @Input() product: any;
}
