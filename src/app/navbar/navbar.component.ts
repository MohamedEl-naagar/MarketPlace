import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false;

  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
