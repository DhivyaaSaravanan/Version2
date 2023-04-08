import { Component, OnInit } from '@angular/core';
import { ConditionService } from '../condition.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(private condition:ConditionService) { }

  ngOnInit() {
    //  this.condition.canAccess();

  }

}
