import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardcodedAuthentication:HardcodedAuthenticationService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.hardcodedAuthentication.isUserLoggedIn()){
      return true;
    }
    else if(this.hardcodedAuthentication.isRestLoggedIn()){
      return true;
    }
    else if(this.hardcodedAuthentication.isAdminLoggedIn()){
      return true
    }
    else{
      window.alert("You dont have access!!! Please connect to Administrator ");
      return false;
    }
    

  //  if(this.hardcodedAuthentication.isAdminLoggedIn()){
  //   return true;
  //  }
  //   window.alert("You dont have access!!! Please connect to Administrator ");
  //   return false;
  }
}