import { Component } from '@angular/core';
import { ContentSectionComponentComponent } from "../../../shared/content-section/content-section.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ ContentSectionComponentComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
