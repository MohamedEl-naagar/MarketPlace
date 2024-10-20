import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      alert('Thank you for contacting us!');
      this.contactForm = { name: '', email: '', message: '' };
    } else {
      alert('Please fill in all the fields.');
    }
  }
}
