import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[UserService]
})
export class SignUpComponent implements OnInit {
  success : boolean;
  errorFlag : string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    //console.log(form.value)
   this.userService.postUser(form.value).subscribe(
     res => {
    this.success= true;
    setTimeout(
      () => this.success=false ,4000)
     },
     err =>{
      this.errorFlag ="Something Wrong happened"
     }
   ) 
  }
  

 


}
