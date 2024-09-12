import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../register/register.component';
import { HardcodedAuthenticationService } from '../../service/hardcoded-authentication.service';
import { CustomerdataService } from '../../service/customerdata.service';

@Component({
  selector: 'app-customer-data-edit',
  templateUrl: './customer-data-edit.component.html',
  styleUrls: ['./customer-data-edit.component.css']
})
export class CustomerDataEditComponent implements OnInit {

  id:number | undefined;
  customerupdate:any;
  customer!: Customer;

  constructor(
    private route: ActivatedRoute,
    public hardcodedAuthentication:HardcodedAuthenticationService,
    private customerservice: CustomerdataService,
    private router:Router){};

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.customer = new Customer(this.id,'',0,'','');

    if(this.id!=-1){
      this.customerservice.getCustomerById(this.id).subscribe(
        response => this.customer = response
      )
    }
  }

  
  updateItem(): void{
    this.id = this.route.snapshot.params['id'];

    this.customerservice.updateCustomerById(this.id,this.customer).subscribe(
      data=> {
        this.customerupdate=data;
      })
      if(this.hardcodedAuthentication.isUserLoggedIn()){
        alert("Data Updated Successfully")
        this.router.navigate(['restaurant']);
      }
      if(this.hardcodedAuthentication.isAdminLoggedIn()){
        alert("Data Updated Successfully")
        this.router.navigate(['customeradmin']);
      }
  }
}