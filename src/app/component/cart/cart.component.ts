import { NgForOf } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { PaymentComponent } from '../payment/payment.component';
import { PreviousOrderCustomerComponent } from '../previous-order-customer/previous-order-customer.component';
import { Customer } from '../register/register.component';
import { Cart } from '../../class/cart';
import { Item } from '../../class/item';
import { CustomerAddress } from '../../class/customer-address';
import { CartService } from '../../service/cart.service';
import { CustomerAddresssService } from '../../service/customer-addresss.service';
import { CustomerService } from '../../service/customer.service';
import { ItemServiceService } from '../../service/item-service.service';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  p:number=1
  count:number=3
  initialQUuantity:number=1;
  email: any;
  inputdata: any;
  cartID!: number;
  cartDetails!: Cart;
  item: Item[]=[];
  customer:any;
  total: number = 0;
  customerId!: number;
  quantityofItem:any=1;
  addId!: number;
  itemCost:any;
  order:any[]=[];
  orders:any;
  itemCost1!: number;
  valueOfItemInInt:number=parseInt(this.quantityofItem);
  selectedAdd!: CustomerAddress;

  constructor(private dialog: MatDialog,
    private cartService: CartService,
    private builder: FormBuilder,
    private customeraddService: CustomerAddresssService,
    private customerService:CustomerService,
    private itemService:ItemServiceService,
    private orderService:OrderService,
    private matDialog:MatDialog
    // @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onSelected(value:string,id:number):void{
    this.quantityofItem=value;
    this.itemService.getItemById(id).subscribe((item: { itemcost: number; })=>{
      console.log(item.itemcost);
      this.itemCost= item.itemcost *parseInt( value);
      console.log(this.itemCost);
    })
    // for(let i= 0;i<this.cartDetails.itemList.length;i++){
    // }

  }

  ngOnInit(): void {
    

    this.email = sessionStorage.getItem('authenticateduser');
    console.log(this.email);
    this.customerService.getCustomerByEmail(this.email).subscribe((customer: any)=>{
      // console.log(customer);
      this.customer = customer;
    })  
    this.cartService.getCartByEmail(this.email).subscribe((cartData: { id: number; cust: { customerid: number; }; }) => {
      this.cartID = cartData.id;
      // console.log(cartData);
      this.customerId = cartData.cust.customerid;
      // console.log(this.cartID);
      console.log(this.customerId);

      this.orderService.getOrderByCustomerIdAndStatusUnpaid(this.customerId).subscribe((orderUnpaid: any)=>{
        this.orders=orderUnpaid;
        this.order.push( orderUnpaid);
        console.log(this.order);
       for(let i=0;i<=this.order.length;i++){
        for(let j=0;j<=this.order.length;j++){
          console.log( this.order[i][j].item.itemcost);
          this.total+=this.order[i][j].item.itemcost*this.order[i][j].quantity;
        }
       }
      })
      this.cartService.getCartById(this.customerId).subscribe((cart: any) => {
       
        this.cartDetails = cart;
        console.log(this.cartDetails);
      
      });
    });

    // console.log(this.cartID)


  }

  addressForm = this.builder.group({
    area: this.builder.control('', [Validators.required, Validators.minLength(10)]),
    city: this.builder.control('', [Validators.required,Validators.minLength(3)]),
    state: this.builder.control('', [Validators.required,Validators.minLength(3)]),
    pincode: this.builder.control('', [Validators.required, Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]),
    country: this.builder.control('', [Validators.required,Validators.minLength(3)])
  })

  saveAdd() {
    console.log(this.addressForm.value);
    this.customeraddService.saveCustomerAdd(this.addressForm.value).subscribe((customerAdd: { addressid: number; }) => {
      console.log(customerAdd);
      
      this.addId = customerAdd.addressid;
      console.log(this.customerId);
      this.customeraddService.assignAddToCustomer(this.customerId, this.addId).subscribe((data: any)=>{
        console.log(data);
      });
    });
    alert("Address Saved Successfully!");
  }


  viewPreviousOrders(){ 
   console.log(this.customerId);
   this.matDialog.open(PreviousOrderCustomerComponent,{
    width:'135vh',
    height:'90vh',
    data:this.customerId
   }) 
    
  }

  increase(id:number,cost:number){
  // totalEacheItem
  this.initialQUuantity++;
  if(id==1){
    this.itemCost1=cost;
  }
  this.itemCost1=cost*this.initialQUuantity
  }
  decrease(id:number,cost:number){
    this.initialQUuantity--;
    if(this.initialQUuantity<=0){
      this.initialQUuantity=1;
    }
  }

  showPreviusAdd(){
    this.dialog.open(CustomerAddComponent, {
      // this.router.navigate(['paymentsuccess'])
      height: '73vh',
      width: '90vh',  
    });
   
  }


  payment(id:number) {
    console.log(this.cartID);

    this.dialog.open(PaymentComponent, {
      // this.router.navigate(['paymentsuccess'])
      height: '73vh',
      width: '70vh',
      data:this.total
    });
  }
}

const pincodeValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
  const value = control.value;
  const isValid = /^\d{6}$/.test(value); // Check if the value contains exactly 6 digits
  return isValid ? null : { invalidPincode: true };
};
