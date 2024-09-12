import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../class/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }
  getrestById(id:number){
    return this.http.get<Restaurant>(`http://localhost:9999/getRestaurantById/${id}`);
  }
  updaterestById(id:number,rest:Restaurant){
    return this.http.put<Restaurant>(`http://localhost:9999/updateRestaurantById/${id}`,rest);
  }

 
  // public getAllRestaurant(searchkeyword:string=""){
  //   return this.http.get<Restaurant[]>(`http://localhost:9999/getAllRestaurantsearch?searchkey=`+searchkeyword);
  // }
}
