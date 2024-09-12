import { Component, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Cart } from '../../class/cart';
import { CustomerAddress } from '../../class/customer-address';
import { CustomerAddresssService } from '../../service/customer-addresss.service';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  p: number = 1;
  count: number = 4;
  add:string="this is add";
  email:any;
  addId!: number;
  public customerAddress:any;
  selectedAdd!: CustomerAddress;
  constructor(private customerService:CustomerService,
    private customerAddService:CustomerAddresssService,
    private matDialogref:MatDialogRef<CustomerAddComponent>,
    private router:Router) { }

  ngOnInit(): void {

    this.email = sessionStorage.getItem('authenticateduser');
    console.log(this.email);


    this.customerService.getCustomerAddByEmail(this.email).subscribe(customerAdd=>{
      console.log(customerAdd);
      this.customerAddress=customerAdd;
    })
  }

  getSelectedADd(id:number){
    this.addId=id;
     this.customerAddService.getCustomerAddById(id).subscribe(data=>{
        console.log(data);
        this.selectedAdd=data;
      })
    alert( 
      `your order will be delivered to following Address
      area = ${this.selectedAdd.area}
      city = ${this.selectedAdd.city}
      state = ${this.selectedAdd.state}
      country = ${this.selectedAdd.country}
      pincode = ${this.selectedAdd.pincode}`
      
      );
            this.matDialogref.close()
  }

  deleteCustomerAdd(id:number){
    this.customerAddService.deleteCustomerAdd(id).subscribe(msg=>{
      console.log(msg);
    })
    alert("Address deleted successfully");
    this.matDialogref.close();
  }

  navigateWithAdd(id:number){
    this.router.navigate(['cart',id]);

  }

}
