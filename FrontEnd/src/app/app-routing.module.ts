import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './user/login/home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path : 'signup', component: SignUpComponent},
  {path : 'login', component: LoginComponent},
  {path : 'userprofile',component : HomeComponent,canActivate:[AuthGuard]},
  {path : '',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
