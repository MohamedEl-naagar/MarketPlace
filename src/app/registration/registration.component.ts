import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  isBrand = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      role: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      officialDocs: [''],
    }, { validators: this.passwordMatchValidator });
  }

  onRoleChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedRole = selectElement.value;

    this.isBrand = selectedRole === 'brand';

    if (this.isBrand) {
      this.registrationForm.get('officialDocs')?.setValidators(Validators.required);
    } else {
      this.registrationForm.get('officialDocs')?.clearValidators();
    }
    this.registrationForm.get('officialDocs')?.updateValueAndValidity();
  }

  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password && confirmPassword && password !== confirmPassword ? { passwordMismatch: true } : null;
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      localStorage.setItem('userData', JSON.stringify(formData));

      console.log('Form Data:', formData);
      this.router.navigate(['/login']);
    } else {
      console.log('Form is invalid');
      this.registrationForm.markAllAsTouched();
    }
  }
}
