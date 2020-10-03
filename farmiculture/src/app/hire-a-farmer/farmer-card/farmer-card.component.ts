import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from 'src/app/_services/farmer.service';

@Component({
  selector: 'app-farmer-card',
  templateUrl: './farmer-card.component.html',
  styleUrls: ['./farmer-card.component.css']
})
export class FarmerCardComponent implements OnInit {

// tslint:disable-next-line: no-input-rename
@Input('product') product: any;
// tslint:disable-next-line: no-input-rename
@Input('show-actions') showActions = true;
// tslint:disable-next-line: no-input-rename
// @Input('shopping-cart') shoppingCart;

quantity = 0;


constructor(
  private farmerService: FarmerService,
  private router: Router
) {
}

ngOnInit(): void {}


details(){
  console.log('detials');
  window.open('farmer/'+this.product._id, '_blank');
}


}
