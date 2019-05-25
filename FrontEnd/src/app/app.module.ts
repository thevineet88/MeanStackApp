import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { LoginComponent } from './user/login/login.component';
import { HeaderComponent } from './user/header/header.component';
import { FooterComponent } from './user/footer/footer.component';
import { HomeComponent } from './user/login/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService} from './shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    LoginComponent, 
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi:true}
  ,UserService,
  AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
