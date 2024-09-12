import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { PaymentComponent } from '../payment/payment.component';
import { OrderService } from '../../service/order.service';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-previous-order-customer',
  templateUrl: './previous-order-customer.component.html',
  styleUrls: ['./previous-order-customer.component.css']
})
export class PreviousOrderCustomerComponent implements OnInit {

  p: number = 1;
  count: number = 6;
  clearHistory:boolean=false;
  customerId:any;
  email:any;
  customerOrder:any;
  customer:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private router:Router,
    private orderService:OrderService,
    private matDialogref:MatDialogRef<PreviousOrderCustomerComponent>,
    private customerService:CustomerService
    
  ) { 
    this.customerId=data;
  }

  ngOnInit(): void {
    this.orderService.getOrderByCustomerIdAndStatusPaid(this.customerId).subscribe(customerOrders=>{
      console.log(customerOrders);
      this.customerOrder=customerOrders;
      if(this.customerOrder.length>0){
        this.clearHistory=true;
      }
    })

    this.email = sessionStorage.getItem('authenticateduser');
    console.log(this.email);
    this.customerService.getCustomerByEmail(this.email).subscribe(customer=>{
      // console.log(customer);
      this.customer = customer;
    })  
  }
  orderAgain(custId:number,restId:number,itemId:number,cartId:number,itemcost:number,quantity:number){
console.log(custId,restId,itemId,cartId,itemcost,quantity);
    this.orderService.saveOrder(custId,restId,itemId,cartId,quantity).subscribe(repeatedCart=>{
      console.log(repeatedCart);
    })

    alert("item added to your cart succesfully")
    this.matDialogref.close();
    this.router.navigate(['cart']);
  }

  deleteOrder(orderId:number){
    this.orderService.deleteOrderById(orderId).subscribe(msg=>{
      console.log(msg);
    })
  alert("item deleted from your history")
    this.matDialogref.close();
  }

  deleteHistory(){
    this.orderService.dleteOrderHistory(this.customer.customerid).subscribe(msg=>{
      console.log(msg);
      
    })
    alert("history cleared")
      this.matDialogref.close();
  }
  

}
