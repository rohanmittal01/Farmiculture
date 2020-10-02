import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = localStorage.getItem('loggedIn');
  constructor(){
    this.loggedIn = localStorage.getItem('loggedIn');
  }
}
