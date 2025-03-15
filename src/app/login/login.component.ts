import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router, RouterLink} from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatCardModule, MatRadioModule, MatButtonModule, RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userdata: any;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, 
    private service: AuthService, private router: Router) { 
      sessionStorage.clear();

      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

    proceedLogin() {
      if (this.loginForm.valid) {
    this.service.GetByCode(this.loginForm.value.username).subscribe(res => {
      this.userdata=res ;
      console.log(this.userdata);
      if (this.userdata.password === this.loginForm.value.password) {
        if(this.userdata.isactive) {
          sessionStorage.setItem('username', this.userdata.id)
          sessionStorage.setItem('userrole', this.userdata.role)
          this.router.navigate([''])
        } else {
          this.toastr.error('Please contact admin', 'In active USer')

        }
      } else {
        this.toastr.error('Invalid credentials')
      }
      }) ;
    
    }
    else {
      this.toastr.error('Invalid credentials')

    }
} }
