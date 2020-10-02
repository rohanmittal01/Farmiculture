import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from '../_guards/route.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {

  orderData: any;
  card: any = {};
  monthArray: any = ['01','02','03','04','05','06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  // tslint:disable-next-line: ban-types
  // monthArray: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // yearArray: any = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
  yearArray: any = [
    2020,
    2021,
    2022,
    2023,
    2024,
    2025,
    2026,
    2027,
    2028,
    2029,
    2030,
    2031,
  ];
  cardDigit;
  cardError = false;
  dateError = false;
  id;
  // tslint:disable-next-line: max-line-length
  constructor(private route: Router, private router: ActivatedRoute,private routeService: RouteService, private alertify: AlertifyService) {
    // this.orderData.card = {};
    this.id = this.router.snapshot.paramMap.get('id');

    // console.log(this.month[2]);
    // console.log(this.month);
  }

  save() {
    this.cardError = false;
    this.dateError = false;
    const c = String(this.card.number);
    this.checkDate();
  }

  checkDate(){
    console.log('1');
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (year > this.card.year){
      this.dateError = true;
      console.log('here');
    // tslint:disable-next-line: triple-equals
    }else if (year == Number(this.card.year)){
      if (month >= Number(this.card.month)){
        this.dateError = true;
      }else{
        this.dateError = false;
        this.checkCard();
      }
    }else{
      this.dateError = false;
      this.checkCard();
    }
    // if(this.card.year)
  }

  checkCard(){
    console.log('11');
    const c = String(this.card.number);
    // tslint:disable-next-line: triple-equals
    if (this.cardDigit == 3) {
      // tslint:disable-next-line: triple-equals
      if (c.length == 15) {
        this.cardError = false;
        this.proceed();
      } else {
        this.cardError = true;
      }
    // tslint:disable-next-line: triple-equals
    } else if (this.cardDigit == 4) {
      // tslint:disable-next-line: triple-equals
      if (c.length == 13 || c.length == 16 || c.length == 19) {
        this.cardError = false;
        this.secondCheck();
      } else {
        this.cardError = true;
      }
    // tslint:disable-next-line: triple-equals
    } else if (this.cardDigit == 5) {
      // tslint:disable-next-line: triple-equals
      if (c.length == 16) {
        this.cardError = false;
        this.secondCheck();
      } else {
        this.cardError = true;
      }
    // tslint:disable-next-line: triple-equals
    } else if (this.cardDigit == 6) {
      // tslint:disable-next-line: triple-equals
      if (c.length == 16 || c.length == 19) {
        this.cardError = false;
        this.secondCheck();
      } else {
        this.cardError = true;
      }
    } else {
      this.cardError = true;
    }
  }
  secondCheck() {
    console.log('1111');
    let c = this.card.number;
    const lastDigit = c % 10;
    let cardSum = 0;
    c = Math.floor(c / 10);
    const reversedNum = c.toString().split('').reverse().map(Number);

    // tslint:disable-next-line: forin
    for (const num in reversedNum) {
      if (parseInt(num) % 2 == 0){
        // console.log(reversedNum[num]);
        reversedNum[num] = reversedNum[num] * 2;
        if (reversedNum[num] > 9){
          reversedNum[num] -= 9;
        }
      }
      cardSum += reversedNum[num];
      // console.log(num);
    }
    console.log(cardSum);
    // tslint:disable-next-line: triple-equals
    if (cardSum % 10 == lastDigit){
      this.cardError = false;
      this.proceed();
    }else{
      this.cardError = true;
    }
    console.log(reversedNum);
  }

  proceed(){
    console.log('1111');
    // tslint:disable-next-line: ban-types
    const cardNumString: String = this.card.number.toString();
    const len = cardNumString.length;
    const splitNum = cardNumString.split('');
    // for(const i in splitNum){
    //   // console.log(i);
    //   if(Number(i) > 1 && Number(i) < (len - 2)){
    //     splitNum[i] = "*";
    //   }
    // }
    console.log(splitNum);
    console.log(splitNum.join(''));

    // this.orderData.card.number = 'ending in '  + splitNum[len - 4] + splitNum[len - 3] + splitNum[len - 2] + splitNum[len - 1];
    // this.orderData.card.name = this.card.name;
    this.alertify.success('Subscription Successful');
  }


  validate() {
    console.log(-1);
    console.log(this.card.number);
    let num = this.card.number;
    while (num > 10) {
      // tslint:disable-next-line: radix
      num = Math.floor(num / 10);
    }
    console.log(num);
    this.cardDigit = num;
  }
  ngOnInit(): void {}

}
