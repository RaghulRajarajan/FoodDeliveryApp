import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerAddress } from '../class/customer-address';
import { Customer } from '../class/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

 
  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:9999";
  public getCustomerAddByEmail(email:string){
    return  this.http.get<CustomerAddress>(`${this.baseUrl}/getCustomerAddByEmail/${email}`);
  }

  public getCustomerByEmail(email:string){
    return  this.http.get<Customer>(`${this.baseUrl}/getCustomerByEmail/${email}`);
  }
}
