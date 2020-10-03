import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandAnalysisComponent } from './land-analysis/land-analysis.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { SubscriptionPlansComponent } from './subscription-plans/subscription-plans.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { MyPlansComponent } from './my-plans/my-plans.component';
import { HireAFarmerComponent } from './hire-a-farmer/hire-a-farmer.component';
import { FarmerCardComponent } from './hire-a-farmer/farmer-card/farmer-card.component';
import { FarmerFilterComponent } from './hire-a-farmer/farmer-filter/farmer-filter.component';
import { FarmerDetailsComponent } from './hire-a-farmer/farmer-details/farmer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    LandAnalysisComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductDescriptionComponent,
    SubscriptionPlansComponent,
    PaymentGatewayComponent,
    MyPlansComponent,
    HireAFarmerComponent,
    FarmerCardComponent,
    FarmerFilterComponent,
    FarmerDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'analysis', component: LandAnalysisComponent},
      {path: 'products/:id', component: ProductDetailsComponent},
      {path: 'product/:id', component: ProductDescriptionComponent},
      {path: 'plans', component: SubscriptionPlansComponent},
      {path: 'hireafarmer', component: HireAFarmerComponent},
      {path: 'farmer/:id', component: FarmerDetailsComponent},
      {path: 'payment/:id', component: PaymentGatewayComponent},
      {path: 'my/plans', component: MyPlansComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
