import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { PaymentSuccessComponent } from '../payment-success/payment-success.component';
import { CartService } from '../../service/cart.service';
import { OrderService } from '../../service/order.service';
import { DummyPayment } from '../../class/dummy-payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  email: any;
  cartID!: number;
  cartDetails={};
  newCart={};
  customerId!: number;
  totalAmountToPay:any;
  order:any[]=[];
  
  constructor(private router:Router,
    private dialog:MatDialog,
    private ref:MatDialogRef<PaymentComponent>,
    private cartService:CartService ,
    private orderService:OrderService,
    @Inject(MAT_DIALOG_DATA) public data:any)
    { 
      this.totalAmountToPay=data
    }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('authenticateduser');
    console.log(this.email);

    this.cartService.getCartByEmail(this.email).subscribe(cartData => {
      this.cartID = cartData.id;
      console.log(cartData);
      this.orderService.getOrderByCustomerIdAndStatusUnpaid(cartData.cust.customerid).subscribe(Order=>{
        console.log(Order);
        this.order.push(Order);
        
      })
    });

    
  }

  cardDatils = new FormGroup({
    personName:  new FormControl('',[Validators.required,Validators.minLength(5)]),
    cardNum:  new FormControl('',[
      Validators.required,Validators.
      minLength(16),Validators.maxLength(16)
    ]),
    expiryDate:  new FormControl('',[Validators.required]),
    cvv:  new FormControl('',[Validators.required]),
  })



  payment(){
    if(
      this.cardDatils.get('personName')?.value == DummyPayment.personName &&
      this.cardDatils.get('cardNum')?.value == DummyPayment.cardNum &&
      this.cardDatils.get('expiryDate')?.value == DummyPayment.expiryDate &&
      this.cardDatils.get('cvv')?.value == DummyPayment.cvv
    ){
       
    this.email = sessionStorage.getItem('authenticateduser');
    console.log(this.email);

    this.cartService.getCartByEmail(this.email).subscribe(cartData => {
      this.cartID = cartData.id;
      console.log(cartData);
      this.customerId = cartData.cust.customerid;
      for(let i=0;i<=this.order.length;i++){
        for(let j=0;j<=this.order.length;j++){
          this.orderService.updateOrderStatus(this.order[i][j].orderid).subscribe(updatedOrder=>{
            console.log(updatedOrder);
          })
        }
        
      }

    })
      // this.cartService.deleteItemInCartByID(this.cartID);

      this.dialog.open(PaymentSuccessComponent,{
        // this.router.navigate(['paymentsuccess'])
        height:'73vh',
        width:'70vh'  
      });
      this.ref.close();
      alert("Payment Sucessful!");
      
      // console.log(DummyPayment.personName)
      // console.log(this.cardDatils.get('personName')?.value);
    }
    else{
      alert("Oops! Invalid card details");
    }
   
  }

  validCardDetails(){
    
  }
}
