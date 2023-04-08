import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {

constructor(private router:Router) { }

// islogged():boolean{
//   if(sessionStorage.getItem('token')!==null){
//      return true;
//   }
//   return false;
// }

// canAccess(){
//   if(!this.islogged()){
//      this.router.navigate(['/NutriLogin']);
//   }
// }


// authUser(user:any){
//   let UserArray =[];
//   if(localStorage.getItem('Users')){
//     UserArray = JSON.parse(localStorage.getItem('Users'));

//   }
//   return UserArray.find(p=> p.email === user.email && p.password === user.password)
// }
}
