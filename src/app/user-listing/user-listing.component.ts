import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-listing',
  imports: [MatTableModule, MatPaginatorModule, NgIf, MatCardModule],
  templateUrl: './user-listing.component.html',
  styleUrl: './user-listing.component.css',
})
export class UserListingComponent {
  constructor(private service: AuthService, private dialog: MatDialog) {
    this.loadUser();
  }

  userlist: any;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  loadUser() {
    this.service.GetAll().subscribe((res) => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
}

  displayedColumns: string[] = [
    'username',
    'name',
    'email',
    'role',
    'status',
    'action',
  ];

  UpdateUser(code: any) {
    const popup = this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      data: {
        usercode: code
      }

    })
    popup.afterClosed().subscribe(res => {
      this.loadUser()
    })
  }

  opendialog() {

  }
}
