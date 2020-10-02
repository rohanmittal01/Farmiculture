import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription-plans',
  templateUrl: './subscription-plans.component.html',
  styleUrls: ['./subscription-plans.component.css']
})
export class SubscriptionPlansComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pay(price){
    console.log('payment/' + price);
    this.router.navigate(['payment/' + price]);
  }
}
