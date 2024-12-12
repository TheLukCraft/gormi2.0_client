import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
   features = [
    {
      icon: 'clock.svg',
      title: 'Szybka realizacja',
      description: 'Dokładamy wszelkich starań aby zamówiony przez Państwa materiał dotarł na czas.',
    },
    {
      icon: 'delivery.svg',
      title: 'Dostawa',
      description: 'Organizowane przez nas dostawy są realizowane przez doświadczonych kierowców, zapewniamy rozładunek HDS na inwestycji.',
    },
    {
      icon: 'check-badge.svg',
      title: 'Wysoka jakość produktów',
      description: 'Nasze produkty cechuje trwałość i estetyka, dzięki czemu spełniają oczekiwania nawet najbardziej wymagających klientów.',
    },
    {
      icon: 'light-bulb.svg',
      title: 'Doradztwo techniczne',
      description: 'Oferujemy profesjonalne wsparcie techniczne oraz pomoc w doborze odpowiednich produktów, dostosowanych do specyfiki Państwa projektu.',
    },
    {
      icon: 'arrows.svg',
      title: 'Elastyczne warunki współpracy',
      description: 'Dokładamy wszelkich starań aby zamówiony przez Państwa materiał dotarł na czas.',
    },
    {
      icon: 'building.svg',
      title: 'Nasze oddziały',
      description: 'Nasi doradcy są do Państwa dyspozycji w oddziałach w: Libertowie koło Krakowa, Węgrzycach koło Krakowa, Bielsko-Białej.',
    },
  ];

}
