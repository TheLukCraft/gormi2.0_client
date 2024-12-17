import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-testowy',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './testowy.component.html',
  styleUrl: './testowy.component.scss'
})
export class TestowyComponent {

}
