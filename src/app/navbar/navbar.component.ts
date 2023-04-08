import { Component, OnInit } from '@angular/core';
import { ConditionService } from '../condition.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public condition:ConditionService) { }

  ngOnInit() {
  }

  loggedin(){
    return localStorage.getItem('token');
  }

  onLogout(){
    localStorage.removeItem('token');
  }
}
