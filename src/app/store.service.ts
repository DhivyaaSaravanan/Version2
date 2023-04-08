import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class StoreService {

constructor(private client:HttpClient) { }

addStoreInformation(body:any){
  return this.client.post("http://localhost:3000/login",body)
}

}
