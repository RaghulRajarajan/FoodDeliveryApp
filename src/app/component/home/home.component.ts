import { Component } from '@angular/core';
import { Restaurant } from '../restaurants/restaurants.component';

import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DataRestaurantService } from '../../service/data-restaurant.service';
import { HardcodedAuthenticationService } from '../../service/hardcoded-authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  restaurant:Restaurant[]=[];
  isUserLoggedIn:boolean=false;

  constructor(private restaurantservice:DataRestaurantService, public hardcodedAuthentication:HardcodedAuthenticationService,public router:Router){
    console.log('Application loaded. Initializing data.');
  }

  p: number = 1;
  count: number = 6;


 
  ngOnInit(): void {
    //this.restaurantservice.getAllRestaurant();
    this.getAllRestaurants();
    this.isUserLoggedIn=this.hardcodedAuthentication.isUserLoggedIn();
   }

   searchByKeyword(searchkeyword: string=""){
    console.log(searchkeyword)
    this.restaurant = [];
    this.getAllRestaurants(searchkeyword);
   } 

   public getAllRestaurants(searchkeyword:string=""){
    this.restaurantservice.getAllRestaurant(searchkeyword)
    .subscribe(
      (response:Restaurant[])=>{
        // resp = this.restaurant;
       // console.log("**********"+response);
        response.forEach((res)=>this.restaurant.push(res));
        console.log('msg',this.restaurant);
        this.restaurantservice.setRestaurantData(this.restaurant);
         //console.log("**********"+response);
        //resp = this.restaurant

      }
      ,(error: HttpErrorResponse)=>{
        console.log(error);
      }
    )
   }

   viewRestaurant(id:number){
    this.router.navigate(['item',id])
  }
  
}