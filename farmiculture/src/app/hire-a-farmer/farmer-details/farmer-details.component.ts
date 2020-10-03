import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerService } from 'src/app/_services/farmer.service';

@Component({
  selector: 'app-farmer-details',
  templateUrl: './farmer-details.component.html',
  styleUrls: ['./farmer-details.component.css']
})
export class FarmerDetailsComponent implements OnInit {

  product: any = {};
  id;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // tslint:disable-next-line: max-line-length
    private farmerService: FarmerService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProductInfo();
    console.log(this.id);
  }

  ngOnInit(): void {
  }

  getProductInfo() {
    if (this.id) {
      this.farmerService.getFarmer(this.id).subscribe((p) => {
        this.product = p;
        console.log(p);
      });
    }
  }

  pay(price){
    console.log('payment/' + price);
    this.router.navigate(['payment/' + price]);
  }

}
