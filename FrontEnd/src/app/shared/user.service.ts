import { Injectable } from '@angular/core';
import {User} from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
// import { getToken } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userObject : User = {
 Name : ' ',
 email : ' ',
 password : ' ',
 DOB : ' '
  };

  // model = {
  //   email : '',
  //   password : ''
  //     };

  urlRegister = environment.apiBaseURL + '/register'
  urlLogin = environment.apiBaseURL + '/authenticate'
  urlGet = environment.apiBaseURL + '/userprofile'

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }
    postUser(user : User)
    {
      //console.log(user.DOB);
     return  this.http.post(this.urlRegister,user,this.noAuthHeader);
    }

    loginUser(formData)
    {
     return this.http.post(this.urlLogin,formData,this.noAuthHeader) ; 
    }

    getUserProfile()
    {
      return this.http.get(this.urlGet);
    }

    getToken()
    {
     return localStorage.getItem('token')
    }

    setToken(token : string){
      localStorage.setItem('token',token)
    }

    deleteToken()
    {
      localStorage.removeItem('token');
    }

    getUserPayload()
    {
      var token = this.getToken()
      //var token = localStorage.getItem('token');
      if(token)
      {
        var userPayload = atob(token.split('.')[1]);
        return JSON.parse(userPayload);
      }
      else
      {
        return null;
      }
    }

    isLoggedIn(){
      var userPayload = this.getUserPayload();
      console.log(userPayload)
      if(userPayload)
      return userPayload.exp > Date.now() /1000;
      else
      return false
    }
}
