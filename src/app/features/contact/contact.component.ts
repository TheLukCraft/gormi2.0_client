import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BreadcrumbComponent } from "../../shared/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, CommonModule, BreadcrumbComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  activeTab = 0;
  isMdScreen = window.innerWidth >= 768;

  // Dane lokalizacji (pusta inicjalizacja)
  locations: { name: string; address: string; phone: string; email: string; mapSrc: SafeResourceUrl }[] = [];

  // Formularz danych
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private sanitizer: DomSanitizer) {
    // Inicjalizacja lokalizacji po wstrzyknięciu DomSanitizer
    this.locations = [
      {
        name: 'GORMI Libertów',
        address: 'Góra Libertowska 22, 30-444 Libertów',
        phone: '12 256 00 33',
        email: 'biuro@gormi.pl',
        mapSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.2539168229705!2d19.90608279969389!3d49.9778251606206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165d378840d5e1%3A0x3ad61f5f9c2afe10!2sG%C3%B3ra%20Libertowska%2022%2C%2030-444%20Libert%C3%B3w!5e0!3m2!1spl!2spl!4v1734508585925!5m2!1spl!2spl'
        )
      },
      {
        name: 'GORMI Kraków Bibice Węgrzce',
        address: 'Warszawska 40A, 32-086 Węgrzce',
        phone: '12 660 99 82',
        email: 'wegrzce@gormi.pl',
        mapSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.1656983108146!2d19.964968877001574!3d50.12062127153099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716507ddfd23a59%3A0xbcd7f448904d7d6f!2sWarszawska%2040a%2C%2032-086%20W%C4%99grzce!5e0!3m2!1spl!2spl!4v1734517288995!5m2!1spl!2spl')
      },
      {
        name: 'GORMI Magazyn II Węgrzce',
        address: 'Zapole 2, 32-086 Węgrzce',
        phone: '534 421 166',
        email: 'wegrzce@gormi.pl',
        mapSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.1656983108146!2d19.964968877001574!3d50.12062127153099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a81d66940a1%3A0xcaf6a2a0c5f0f557!2sZapole%202%2C%2032-087%20W%C4%99grzce!5e0!3m2!1spl!2spl!4v1734517402759!5m2!1spl!2spl')
      }
    ];
  }

  openGoogleMaps(address: string) {
    const encodedAddress = encodeURIComponent(address); // Kodowanie adresu
    const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank'); // Otwiera w nowej karcie
  }

  // Obsługa zmiany rozmiaru okna
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMdScreen = (event.target as Window).innerWidth >= 768;
  }

  // Obsługa formularza
  onSubmit() {
    const { name, email, message } = this.formData;

    // Sprawdzenie, czy wszystkie pola są wypełnione
    if (!name || !email || !message) {
      alert('Proszę wypełnić wszystkie pola formularza.');
      return; // Zatrzymanie dalszej obsługi
    }

    const targetEmail = this.locations[this.activeTab].email;

    // Wyświetlenie alertu w przypadku powodzenia
    alert(`Wiadomość została wysłana`);
  }

}
