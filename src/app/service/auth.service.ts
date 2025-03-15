import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:3000/user';

  GetAll() {
    return this.http.get(this.apiUrl);
  }

  GetALlRole(){
    return this.http.get('http://localhost:3000/role')
  }
  GetByCode(code: any) {
    return this.http.get(this.apiUrl + '/' + code);
  }

  ProceedRegister(inputdata: any) {
    return this.http.post(this.apiUrl, inputdata);
  }
  Updateuser(code: any, inputdata: any) {
    return this.http.put(this.apiUrl + '/' + code, inputdata);
  }

  isLoggedIn() {
    return sessionStorage.getItem('username')!= null;
  }

  GetUserRole() {
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }
  
  GetAllCustomer() {
    return this.http.get('http://localhost:3000/customer');
  }
  Getacessbyrole(role:any, menu:any) {
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }
}
