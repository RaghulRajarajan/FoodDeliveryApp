import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantLoginService {
  saveRestaurant(restaurant: { restloginname: string | null | undefined; restloginemail: string | null | undefined; restloginmobilenumber: string | null | undefined; password: string | null | undefined; }) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  // addRestaurant(restaurantLogin: RestaurantRegistration): Observable<RestaurantRegistration> {
  //   return this.http.post<RestaurantRegistration>(`http://localhost:9999/saveRestaurantRegistration`, restaurantLogin);
  // }

  getResaturantLoginByEmail(email: string, password: string): Observable<RestaurantRegistration> {
    return this.http.get<RestaurantRegistration>(`http://localhost:9999/getRestaurantByEmail/${email}/${password}`);
  }
}
export class RestaurantRegistration {
  constructor(
    public restid:number,
    public restname :string,
    public area: string,
    public city: string,
    public state:string,
    public country:string,
    public pincode:number,
    public managerName:string,
    public contactNumber:number,
    public email:string,
    public password:string
  ) {}
}