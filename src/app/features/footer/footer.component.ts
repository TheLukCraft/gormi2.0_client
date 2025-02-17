import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BranchDetails } from '../../models/branchDetails.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  branches: Record<string, BranchDetails> = {
    'Libertów': {
      name: 'GORMI Libertów',
      address: 'ul. Góra Libertowska 22',
      phone: '12 256-00-33',
      phone2: '534-421-014',
      email: 'biuro@gormi.pl',
      hoursWeekdays: '07:00 - 16:00',
      hoursSaturday: '08:00 - 13:00',
    },
    'Kraków': {
      name: 'GORMI Kraków Bibice Węgrzce',
      address: ' ul. Warszawska 40A',
      phone: '12 660-99-82',
      phone2: ' 534-421-166',
      email: 'wegrzce@gormi.pl',
      hoursWeekdays: '07:00 - 16:00',
      hoursSaturday: '08:00 - 13:00',
    },
    'Magazyn Węgrzyce': {
      name: 'Magazyn Węgrzyce',
      address: 'ul. Zapole 2',
      phone: '534 421 166',
      hoursWeekdays: '07:00 - 16:00',
      hoursSaturday: '08:00 - 13:00',
    }
  };

  selectedBranch: BranchDetails | null = null;

  setBranch(location: string) {
    this.selectedBranch = this.branches[location];
  }

  goToLink(url: string){
    window.open(url, "_blank");
}
}
