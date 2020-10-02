import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  
  // tslint:disable-next-line: no-input-rename
  @Input('product') product: any;
  // tslint:disable-next-line: no-input-rename
  @Input('show-actions') showActions = true;
  // tslint:disable-next-line: no-input-rename
  // @Input('shopping-cart') shoppingCart;
  family="";
  quantity = 0;


  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.family = localStorage.getItem('family');
  }

  ngOnInit(): void {}

  
  details(){
    console.log('detials');
    window.open('products/'+this.product._id, '_blank');
  }

}
