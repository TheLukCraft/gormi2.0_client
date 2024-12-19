import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.scss'
})
export class CookiesComponent {
  isModalVisible = true;

  acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    this.isModalVisible = false;
  }

  declineCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    this.isModalVisible = false;
  }

  ngOnInit() {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
      this.isModalVisible = false;
    }
  }
}
