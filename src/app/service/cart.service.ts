import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../class/cart';
import { Customer } from '../class/customer';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl:string="http://localhost:9999";
  constructor(private http:HttpClient) { }

  public getCartById(id:number){
    return  this.http.get<Cart>(`${this.baseUrl}/findCartByID/${id}`);
  }

  addItemToCart(id:number,item:any){
      return this.http.put<Cart>(`${this.baseUrl}/updateCartByItem/${id}`,item);
  }

  addCustomerToCart(id:number,customer:any){
    return this.http.put<Cart>(`${this.baseUrl}/updateCartByCustomer/${id}`,customer);
  }

  public saveCart(customer:any){
 return this.http.post<Cart>(`${this.baseUrl}/savecart`,customer);
  }

  public addAddress(id:number,customeradd:any){
return this.http.post<Customer>(`${this.baseUrl}/updateCustomerAddByid/${id}`,customeradd);
  }


  public getCartByEmail(email:string){
    return this.http.get<Cart>(`${this.baseUrl}/getCartByEmail/${email}`);
  }

  public deleteItemInCartByID(cartid:number){
return this.http.delete<Cart>(`${this.baseUrl}/deleteItemInCartById/${cartid}`);
  }

  public deleteCartById(id:number){
return this.http.delete<Cart>(`${this.baseUrl}/deleteItemInCartById/${id}`);
  }

  public updateStatus(id:number){
  return this.http.get<Cart>(`${this.baseUrl}/updatePaymentStatus/${id}`);
  }

  public getCartByStatusPaid(id:number){
    return this.http.get<Cart>(`${this.baseUrl}/viewOrdersByRestaurant/${id}`);
  }
}