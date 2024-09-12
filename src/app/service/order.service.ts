import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../class/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl:string="http://localhost:9999";
  constructor(
    private http:HttpClient
  ) { }

saveOrder(custId:number,restId:number,itemId:number,cartId:number,intitalQuantity:number){
  return this.http.get<Order>(`${this.baseUrl}/saveOrder/customerid/${custId}/restid/${restId}/itemid/${itemId}/cartid/${cartId}/quantity/${intitalQuantity}`)
}

getOrderByRestID(id:number){
  return this.http.get<Order>(`${this.baseUrl}/getOrderByRestId/${id}`);
}

getOrderByCustomerID(id:number){
  return this.http.get<Order>(`${this.baseUrl}/getOrderByCustomerId/${id}`);
}

getOrderByCustomerIdAndStatusUnpaid(custId:number){
  return this.http.get<Order>(`${this.baseUrl}/getOrderByCustomerIdAndStatusUnpaid/${custId}`);
}

getOrderByCustomerIdAndStatusPaid(custId:number){
  return this.http.get<Order>(`${this.baseUrl}/getOrderByCustomerIdAndStatusPaid/${custId}`);
}

updateOrderStatus(orderId:number){
  return this.http.get<Order>(`${this.baseUrl}/updateOrderStatus/${orderId}`);
  
}

deleteOrderById(orderId:number){
  return this.http.delete<Order>(`${this.baseUrl}/deleteOrderById/${orderId}`);
}
dleteOrderHistory(custId:number){
    return this.http.delete<Order>(`${this.baseUrl}/deleteOrderhistory/${custId}`);
}

}
