import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmerService } from '../_services/farmer.service';

@Component({
  selector: 'app-hire-a-farmer',
  templateUrl: './hire-a-farmer.component.html',
  styleUrls: ['./hire-a-farmer.component.css']
})
export class HireAFarmerComponent implements OnInit {

  productListCollection: any[];
  category: string;
  filteredProducts: any = [];
  cart: any;
  availability;
  noProducts = false;
  minRange;
  maxRange;
  range;
  familyName = '';
  plantType = '';
  bloomTime = '';
  sizeAtMaturity = '';
  suitableSiteConditions = '';
  soilType = '';
  waterNeeds = '';
  appropriateLocation = '';
  filterButtonClicked = false;
  searchResult = 0;
  constructor(
    private route: ActivatedRoute,
    private farmerService: FarmerService
  ) {
    // console.log('-------------------------------');
    this.getProducts();
    console.log('family: ' + this.familyName);
    console.log('1');
  }

  ngOnInit() {}

  getProducts() {
    // console.log('prod');
    console.log('2');
    this.familyName = localStorage.getItem('family');
    console.log('x: ' + this.familyName);
    console.log(localStorage.getItem('family'));
    this.farmerService
      .getAllFarmers()
      .subscribe((data: any) => {
        this.productListCollection = data;
        this.filteredProducts = this.productListCollection;
        console.log(data);
        this.searchResult = this.filteredProducts.length;
        console.log(this.searchResult);
      });
  }


}
