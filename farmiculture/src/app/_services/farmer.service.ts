import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllFarmers(){
    return this.http.get(this.baseUrl + 'farmers/');
  }

  getFarmer(id){
    return this.http.get(this.baseUrl + 'farmers/' + id);
  }
}
