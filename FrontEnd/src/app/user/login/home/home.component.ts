import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user = {
  Name : ' ',
  email : ' ',
  DOB : ' ',
};
  constructor(private http: HttpClient,private userService : UserService,private router : Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        console.log(res);
          this.user  = res['user']
      },
      err =>
      {
        console.log(err);
      }
    )
  }
  
 

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['login'])
  }

}
