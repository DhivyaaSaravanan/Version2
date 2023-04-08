import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class UsersService {
constructor(private client:HttpClient) { }

addUserInformation(body:any){
  return this.client.post("http://localhost:3000/users",body)
}
retrieveOneUser(id:any){
  console.log();
  return this.client.get("http://localhost:3000/users",id);
}
}
