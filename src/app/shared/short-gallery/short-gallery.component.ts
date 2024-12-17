import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-short-gallery',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './short-gallery.component.html',
  styleUrl: './short-gallery.component.scss'
})
export class ShortGalleryComponent {
 @Input() imagePaths: string[] = [];

 selectedImage: string | null = null;

 openDialog(image: string): void {
   this.selectedImage = image;
 }

 closeDialog(): void {
   this.selectedImage = null;
 }
}
