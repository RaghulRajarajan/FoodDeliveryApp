import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from '../../service/hardcoded-authentication.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent  {
   isUserLoggedIn: boolean = false;

   constructor(public hardcodedAuthentication: HardcodedAuthenticationService, private route:ActivatedRoute) {
   }
   ngOnInit(): void {
    this.isUserLoggedIn = this.hardcodedAuthentication.isUserLoggedIn();
   }
}

