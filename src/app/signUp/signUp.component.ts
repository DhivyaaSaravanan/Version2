import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControlName, FormControl} from '@angular/forms';
import { UsersService } from '../users.service';
import * as alertyfy from 'alertifyjs';


@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {

  loginForm =new FormGroup({
    username:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern ('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]),
    mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
   })
  constructor( private fb:FormBuilder,private usersService:UsersService,private http:HttpClient) { }

  ngOnInit():void {

  }


  get username(){
    return this.loginForm.get('username');
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  get mobile(){
    return this.loginForm.get('mobile');
  }


  submitForm(){
    this.http.post<any>("http://localhost:3000/users", this.loginForm.value).subscribe(()=>{
      alertyfy.success('Account Created');
    })
  }

  getUserData(){
    this.usersService.retrieveOneUser((this.loginForm.controls['username'].value)).subscribe(data=>{
      alert(JSON.stringify(data));
    })
  }
}

