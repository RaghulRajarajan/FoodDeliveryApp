import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../component/restaurants/restaurants.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRestaurantService {

  public restaurantData: BehaviorSubject<Restaurant[]> = new BehaviorSubject<Restaurant[]>([]);
  constructor(private http:HttpClient) { }

  retriveAllRestaurant(){
    return this.http.get<Restaurant[]>
      (`http://localhost:9999/getAllRestaurant`);
  }
  deleterest(id:number){
    return this.http.delete<Restaurant[]>
      (`http://localhost:9999/deleteRestaurantById/${id}`);
  }

  public getAllRestaurant(searchkeyword:string=""){
    return this.http.get<Restaurant[]>(`http://localhost:9999/getAllRestaurantsearch?searchkey=`+searchkeyword);
  }

  getRestaurantByEmail(email:string){
    return this.http.get<Restaurant>(`http://localhost:9999/getRestaurantByEmail/${email}`)
  }

  setRestaurantData(data: Restaurant[]): void {
    this.restaurantData.next(data);

  }

  getRestaurantData(): BehaviorSubject<Restaurant[]> {
    return this.restaurantData;
  }

  
}
