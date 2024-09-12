import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Customer, RegisterComponent } from '../register/register.component';

import { Router } from '@angular/router';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { DataRestaurantService } from '../../service/data-restaurant.service';
import { CustomerService } from '../../service/customer.service';
import { HardcodedAuthenticationService } from '../../service/hardcoded-authentication.service';
import { Restaurant } from '../restaurants/restaurants.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  restaurant:Restaurant[]=[];
  email:any;
  customer:any;
  email1:any;
  //restaurant2:Restaurant[]=[];

  isUserLoggedIn:boolean=false;

  constructor(private restaurantservice:DataRestaurantService,
    private customerService:CustomerService,
    private dialog:MatDialog, public hardcodedAuthentication:HardcodedAuthenticationService,public router:Router){}

  ngOnInit(): void {
    //this.restaurantservice.getAllRestaurant();
    this.getAllRestaurants();
    this.isUserLoggedIn=this.hardcodedAuthentication.isUserLoggedIn();
    this.email = sessionStorage.getItem('authenticateduser');
    console.log(this.email);
    this.customerService.getCustomerByEmail(this.email).subscribe((customer: any)=>{
      console.log(customer);
      this.customer = customer;
    }) 
    
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
        console.log("**********"+response);
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
    // this.restaurantservice.retriveAllRestaurant().subscribe(
    //   response =>{
    //     this.restaurant = response;
    //     console.log(response);
    //     // console.log(this.restaurant)
    //   }
    // )

   }


  //for login popup
  Openpopup(){
    this.dialog.open(LoginComponent,{
      width:'50%',
      height:'500px'
    })
  }

  //for sign in popup
  Openpopup2(){
    this.dialog.open(RegisterComponent,{
      width:'50%',
      height:'500px'
    })
  }

  customerview(){ 
    this.router.navigate(['customeradmin']); 
  }
  resturantview(){
    this.router.navigate(['restaurantadmin'])
  }

  adminlogout(){
    sessionStorage.removeItem("authenticatedadmin");
    sessionStorage.removeItem("authenticateduser");
    sessionStorage.removeItem("authenticatedrest");
    this.router.navigate(['']);
  }

  customerManage(){
    
    if(this.hardcodedAuthentication.isUserLoggedIn()){
        console.log(this.customer.customerid);

        this.router.navigate(['customerEdit',this.customer.customerid]);
      }
      
      if(this.hardcodedAuthentication.isRestLoggedIn()){
         this.email1 = sessionStorage.getItem('authenticatedrest');
        console.log(this.email1);
        this.restaurantservice.getRestaurantByEmail(this.email1).subscribe((restaurantId: any)=>{
          console.log(restaurantId);
          this.router.navigate(['restaurantEdit',restaurantId])
        })
      }
     
    
  }

  
}
