import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.pattern('^(?=.*[a-zA-Z0-9]).{6,}$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      gender: ['Male'],
      role: [''],
      isactive: [false],
    });
  }

  proceedRegisteration() {
    if (this.registerForm.valid) {
      this.service.ProceedRegister(this.registerForm.value).subscribe((res) => {
        this.toastr.success('PLease contact admin for enable access');
        this.router.navigate(['login']);
      });
    } else {
      this.toastr.warning('PLease enter vlaid data');
    }
  }
}
