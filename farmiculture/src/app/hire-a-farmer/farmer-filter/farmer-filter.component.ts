import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-farmer-filter',
  templateUrl: './farmer-filter.component.html',
  styleUrls: ['./farmer-filter.component.css']
})
export class FarmerFilterComponent implements OnInit {

  categories: any[];
  subscribe2: Subscription;
  @Input('avialability') availability: any;
  @Input('range') range: any = {};
  // range: {min: number, max: number} = {min: 0, max: 1000};
  // @Input('min') min: any;
  // @Input('max') max: any;
  constructor() {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  print(){
    // console.log(this.range);
  }


}
