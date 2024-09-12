import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataRestaurantService } from '../../service/data-restaurant.service';
import { CustomerService } from '../../service/customer.service';
import { HardcodedAuthenticationService } from '../../service/hardcoded-authentication.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  p: number = 1;
  email:any;
  customer:any;
  count: number = 6;
  isUserLoggedIn:boolean=false;
  restaurant:Restaurant[]=[];
 

constructor(private restaurantservice:DataRestaurantService,
  private customerService:CustomerService,
  public hardcodedAuthentication:HardcodedAuthenticationService,
  private router:Router){
  console.log('Application loaded. Initializing data.');
}
ngOnInit(): void {


    this.isUserLoggedIn=this.hardcodedAuthentication.isUserLoggedIn();
    this.email = sessionStorage.getItem('authenticateduser');
    console.log(this.email);
    this.customerService.getCustomerByEmail(this.email).subscribe(customer=>{
      console.log(customer);
      this.customer = customer;
    }) 
    
  // this.restaurantservice.retriveAllRestaurant().subscribe(
  //   response =>{
  //     this.restaurant = response;
  //     console.log("nidhi"+response);
  //   }
  // )
  this.restaurantservice.getRestaurantData().subscribe((data) => {
        // Update the restaurants array with the data from the service
        this.restaurant = data;
        console.log("NNNNNN"+data);
      });
}
viewRestaurant(id:number){
  this.router.navigate(['item',id])
}
customerManage(){
  console.log(this.customer.customerid);
  this.router.navigate(['customerEdit',this.customer.customerid]);
}
}


export class Restaurant{
constructor(
  public restid:number,
  public area:string,
  public city:string,
  public country:string,
  public pincode:number,
  public state:string,
  public pic:string,
  public restname:string,
  public managerName:string,
  public contactNumber:string,
  public status:boolean
){}
}
