import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../component/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  addCustomer(customer:Customer){
    return this.http.post<Customer>(`http://localhost:9999/saveCustomer`,customer);
  }

  
  // getCustomerByEmail(customeremail:string,password:string){
  //   return this.http.get<Customer>(`http://localhost:9999/getCustomerByEmail/${customeremail}/${password}`);
  // }

  getcustomerByEmail1(customeremail:string,password:string){
    return this.http.get<Customer>(`http://localhost:9999/getCustomerByEmail/${customeremail}/${password}`);
  }
}
