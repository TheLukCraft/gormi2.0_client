import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-section-short',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule],
  templateUrl: './content-section-short.component.html',
  styleUrl: './content-section-short.component.scss'
})
export class ContentSesionShortComponent {
    @Input() headingHighlight: string = '';
    @Input() heading: string = '';
    @Input() description: string = '';
    @Input() imageSrc: string = '';
    @Input() imageAlt: string = '';
    @Input() imagePosition: 'left' | 'right' = 'right';
    @Input() cols: number = 3;
    @Input() features: { icon: string; title: string }[] = [];
}
