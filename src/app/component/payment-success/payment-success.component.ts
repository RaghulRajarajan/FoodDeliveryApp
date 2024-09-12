import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {
  newCart={}
  constructor(private router:Router,
    private ref:MatDialogRef<PaymentSuccessComponent>,
    private cartService:CartService) { }

  ngOnInit(): void {
   
  }

  returnLogIn(){
this.router.navigate(['restaurant']);
this.ref.close();
  }

}
