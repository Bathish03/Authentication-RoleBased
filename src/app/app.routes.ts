import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { AuthGuard } from './auth.guard';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, canActivate:[AuthGuard]},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserListingComponent, canActivate:[AuthGuard]},
    {path: 'customer', component: CustomerComponent, canActivate:[AuthGuard]},
];
