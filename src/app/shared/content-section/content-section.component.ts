import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule],
  templateUrl: './content-section.componen.html',
  styleUrl: './content-section.component.scss'
})
export class ContentSectionComponentComponent {
  @Input() headingHighlight: string = '';
  @Input() heading: string = '';
  @Input() subheading: string = '';
  @Input() description: string = '';
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() imagePosition: 'left' | 'right' = 'right';
  @Input() cols: number = 3;
  @Input() features: { icon: string; title: string; description: string }[] = [];
}
