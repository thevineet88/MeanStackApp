import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model ={
email : '',
password : ''
  };

  errorMsg : string;
  runtimeToken : string;
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm)
  {
    this.userService.loginUser(form.value).subscribe(
      res =>
      {   
        console.log(res)
          // this.runtimeToken=res.token;
          // console.log(this.runtimeToken);
          this.userService.setToken(res['token']);
          this.router.navigateByUrl('userprofile');
      },
      err =>
      {
        this.errorMsg = err.error.message;
      }
    )
  }
}
