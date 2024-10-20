import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      alert('Login successful!');

      if (user.role === 'distributor') {
        this.router.navigate(['/distributor']);
      } else if (user.role === 'brand') {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/home']);
      }
    } else {
      alert('Invalid email or password');
    }
  }
}
