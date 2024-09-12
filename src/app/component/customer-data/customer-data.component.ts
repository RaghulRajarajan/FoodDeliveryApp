import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../register/register.component';
import { CustomerdataService } from '../../service/customerdata.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent {
  p: number = 1;
  count: number = 4;
  customer:Customer[]=[];
 
  // id:number;
  constructor(private customerservice:CustomerdataService,private router:Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.customerservice.retriveAllCustomer().subscribe(
      response =>{
        this.customer = response;
        console.log(this.customer);
      }
    )
  }

  customerUpdate(id:number){
    console.log(id);
    this.router.navigate(['customerEdit',id]);
  }

  customerDelete(id:number){
    this.customerservice.deleteCustomerById(id).subscribe(
      response => {
        this.customer = response;
        this.router.navigate(['customeradmin']);
      }
    )
  }

}