import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
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
    private productService: ProductService
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
    this.productService
      .getFamilyData(this.familyName)
      .subscribe((data: any) => {
        this.productListCollection = data;
        console.log(data);
        this.findMatchPercent();
        this.filter();
      });
  }

  findMatchPercent() {
    console.log('madhur');
    this.familyName = localStorage.getItem('family');
    this.plantType = localStorage.getItem('plantType');
    this.bloomTime = localStorage.getItem('bloomTime');
    this.sizeAtMaturity = localStorage.getItem('sizeAtMaturity');
    this.suitableSiteConditions = localStorage.getItem(
      'suitableSiteConditions'
    );
    this.soilType = localStorage.getItem('soilType');
    this.waterNeeds = localStorage.getItem('waterNeeds');
    this.appropriateLocation = localStorage.getItem('appropriateLocation');
    // tslint:disable-next-line: forin
    for (let i in this.productListCollection) {
      let c = 0;
      if (this.productListCollection[i].Bloom_Time == this.bloomTime) {
        c += 1;
      }
      if (this.productListCollection[i].Plant_Type == this.bloomTime) {
        c += 1;
      }
      if (
        this.productListCollection[i].Size_at_Maturity == this.sizeAtMaturity
      ) {
        c += 1;
      }
      if (this.productListCollection[i].Soil_Type == this.soilType) {
        c += 1;
      }
      if (
        this.productListCollection[i].Suitable_Site_Conditions ==
        this.suitableSiteConditions
      ) {
        c += 1;
      }
      if (this.productListCollection[i].Water_Needs == this.waterNeeds) {
        c += 1;
      }
      if (
        this.productListCollection[i].Appropriate_Location ==
        this.appropriateLocation
      ) {
        c += 1;
      }
      console.log(c);

      this.productListCollection[i].match = ((c / 7) * 100).toFixed(2);
    }
  }

  filter() {
    // this.familyName = this.productService.familyName;
    console.log('family: ' + this.familyName);
    // console.log(this.productListCollection);

    this.filteredProducts = this.productListCollection;
    console.log(this.filteredProducts);
    // tslint:disable-next-line: triple-equals
    // console.log(this.filteredProducts);
    // tslint:disable-next-line: triple-equals
    this.filteredProducts.sort((a, b) => b.match - a.match);
    this.searchResult = this.filteredProducts.length;
    console.log(this.searchResult);
  }
}
