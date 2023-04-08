import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControlName, FormControl, NgForm} from '@angular/forms';
import { StoreService } from '../store.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-NutriLogin',
  templateUrl: './NutriLogin.component.html',
  styleUrls: ['./NutriLogin.component.css']
})
export class NutriLoginComponent implements OnInit {

  email:any="";
  password:any="";
  constructor( private routes:Router,private storeService:StoreService,private http:HttpClient) {

  }

  ngOnInit():void {

  }




  submitForm(){

  }
  }



