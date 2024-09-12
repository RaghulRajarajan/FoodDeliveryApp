import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../class/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http:HttpClient) { }

  getAdminByEmail(customeremail:string,password:string){
    return this.http.get<Admin>(`http://localhost:9999/getAdminByusername/${customeremail}/${password}`);

  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticateuser');
   // alert("user="+user);
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem("authenticateuser");
  }
}
