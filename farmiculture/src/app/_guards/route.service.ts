import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  checkOutRoute = false;
  paymentGatewayRoute = false;
  orderSuccessRoute = false;
  constructor(private route: ActivatedRoute, private router: Router) { }

  canActivate(router, state: RouterStateSnapshot){
    console.log('-----------------------In Route Service');
    if(this.checkOutRoute == true || this.paymentGatewayRoute == true || this.orderSuccessRoute == true){
      return true;
    }
    //this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    this.router.navigate(['/shopping-cart']);
    return false;
  }
}
