import { Component, OnInit } from '@angular/core';

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
  constructor() {}

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
