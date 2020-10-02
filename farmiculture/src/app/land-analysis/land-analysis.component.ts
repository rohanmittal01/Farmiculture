import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-land-analysis',
  templateUrl: './land-analysis.component.html',
  styleUrls: ['./land-analysis.component.css'],
})
export class LandAnalysisComponent implements OnInit {
  showTable: false;
  showSuggestCropsButton = true;
  loading = false;
  showCrops = false;
  dataValues: any;
  constructor(private db: AngularFireDatabase) {
    this.db.list('/').valueChanges().subscribe(x => {
      this.dataValues = x;
      console.log(this.dataValues);
    })
  }

 

  ngOnInit(): void {}

  suggestCrops() {
    this.loading = true;
    this.showCrops = false;
    this.f1().then((res) => this.f2());
  }

  f1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }

  f2() {
    this.loading = false;
    this.showCrops = true;
    this.showSuggestCropsButton = false;
  }
}
