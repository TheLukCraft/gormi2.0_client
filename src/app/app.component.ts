import { Component } from '@angular/core';
import { MenuComponent } from "./features/menu/menu.component";
import { RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FooterComponent } from "./features/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
