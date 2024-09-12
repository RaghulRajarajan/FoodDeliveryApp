import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataViewRestaurantService {
  constructor(private http: HttpClient) {}

  addRestaurant(restaurant: any) {
    return this.http.post('http://localhost:9999/saveRestaurant', restaurant);
  }
}
