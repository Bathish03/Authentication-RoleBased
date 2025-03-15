import { Component, Inject, OnInit } from '@angular/core';
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
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  imports: [
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    RouterLink,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  templateUrl: './updatepopup.component.html',
  styleUrl: './updatepopup.component.css',
})
export class UpdatepopupComponent implements OnInit {
  registerForm: FormGroup;
  rolelist: any;
  editedata: any;
  ngOnInit(): void {
    this.service.GetALlRole().subscribe((res) => {
      this.rolelist = res;
    });
    if (this.data.usercode != null && this.data.usercode != '') {
      this.service.GetByCode(this.data.usercode).subscribe(res => {
        this.editedata = res;
        this.registerForm.setValue({
          id: this.editedata.id,
          name: this.editedata.name,
          email: this.editedata.email,
          password: this.editedata.password,
          role: this.editedata.role,
          gender: this.editedata.gender,
          isactive: this.editedata.isactive,
        });
      });
    }
  }

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,
    private dialog:MatDialogRef<UpdatepopupComponent>
  ) {
    this.registerForm = this.fb.group({
      id: [''],
      name: [''],
      password: [''],
      email: [''],
      gender: ['Male'],
      role: ['', Validators.required],
      isactive: [false],
    });
  }

  updateuser() {
    if (this.registerForm.valid) {
      this.service
        .Updateuser(this.registerForm.value.id, this.registerForm.value)
        .subscribe((res) => {
          this.toastr.success('Updated successfully');
          this.dialog.close();
        });
    } else {
      this.toastr.warning('Please Select Role.');
    }
  }
}
