import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantLoginService, RestaurantRegistration } from '../../service/restaurant-login.service';
import { HardcodedAuthenticationService } from '../../service/hardcoded-authentication.service';

@Component({
  selector: 'app-restaurant-signup',
  templateUrl: './restaurant-signup.component.html',
  styleUrls: ['./restaurant-signup.component.css']
})

export class RestaurantSignupComponent {
  id!: number;

  loginData: { restloginemail: string, restloginpassword: string } = {
    restloginemail: '',
    restloginpassword: ''
  };

  constructor(private loginservice: RestaurantLoginService, private router: Router,
    private hardcodedAuth:HardcodedAuthenticationService) { }

  loginRestaurant() {
    console.log("Inside login");

    this.loginservice.getResaturantLoginByEmail(this.loginData.restloginemail, this.loginData.restloginpassword)
      .subscribe(
        (data: RestaurantRegistration) => {
          if (data) {
            this.hardcodedAuth.authenticateRest(this.loginData.restloginemail,this.loginData.restloginpassword);
            alert("Login Successful!")
            // Redirect to AddRestaurant page or any other page you want
            this.router.navigate(['item',data.restid]);
          } else {
            alert("Login failed")
            console.log("Login failed");
            // Handle login failure, show error message, etc.
          }
        },
        error => {
          console.error("Login error:", error);
          // Handle login error, show error message, etc.
        }
      );
  }


}