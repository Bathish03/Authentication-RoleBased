import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  imports: [
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    NgIf,
    MatCardModule,
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  constructor(private router:Router ,private service: AuthService, private toastr: ToastrService) {
    
    this.SetAccesspermission();
  }

  customerlist: any;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  acessdata:any;
  haveedit = false;
  haveadd = false;
  havedelete = false;

  loadCustomer() {
    this.service.GetAllCustomer().subscribe((res) => {
      this.customerlist = res;
      this.dataSource = new MatTableDataSource(this.customerlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  SetAccesspermission() {
    this.service.Getacessbyrole(this.service.GetUserRole(),'customer').subscribe(res => {
      this.acessdata = res;
      console.log(this.acessdata)
      if(this.acessdata.length>0){
        this.haveadd = this.acessdata[0].haveadd;
        this.haveedit = this.acessdata[0].haveedit;
        this.havedelete = this.acessdata[0].havedelete;
        this.loadCustomer();
      } else {
        this.toastr.warning("you are not authorized to access")
        this.router.navigate([''])
      }
    })
  }
  displayedColumns: string[] = ['code', 'name', 'Creditlimit', 'action'];
  UpdateCustomer(code: any) {
    if(this.haveedit) {
      this.toastr.success('success')
    } else {
      this.toastr.warning("You don't have access for edit")
    }
  }
  removeCustomer(code: any) {
    if(this.havedelete) {
      this.toastr.success('success')

    } else {
      this.toastr.warning("You don't have access for remove")

    }
  }
  AddCustomer(code: any) {
    if(this.haveadd) {
      this.toastr.success('success')
    } else {
      this.toastr.warning("You don't have access for add")

    }
  }
}
