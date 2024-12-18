import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent {
  @Input() locationData!: {
    mapUrl: string;
    phone: string;
    email: string;
    address: string;
    sendToEmail: string;
  };

  constructor(private http: HttpClient) {}

  // onSubmit(form: any) {
  //   if (form.valid) {
  //     const formData = form.value;
  //     const emailData = {
  //       name: formData.name,
  //       email: formData.email,
  //       message: formData.message,
  //       sendTo: this.locationData.sendToEmail,
  //     };

  //     this.http.post('https://api.example.com/send-email', emailData).subscribe(
  //       () => {
  //         alert('Wiadomość została wysłana!');
  //         form.reset();
  //       },
  //       () => {
  //         alert('Wystąpił problem podczas wysyłania wiadomości.');
  //       }
  //     );
  //   }
  // }
}
