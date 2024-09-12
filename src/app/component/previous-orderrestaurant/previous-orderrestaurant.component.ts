import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-previous-orderrestaurant',
  templateUrl: './previous-orderrestaurant.component.html',
  styleUrls: ['./previous-orderrestaurant.component.css']
})
export class PreviousOrderrestaurantComponent implements OnInit {

  p: number = 1;
  count: number = 6;
  restID:any;
 public orders:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private orderService:OrderService
  ) { }

  ngOnInit(): void {
    this.restID=this.data;
    this.orderService.getOrderByRestID(this.restID).subscribe(order=>{
      console.log(order);
      this.orders=order;
    })
    
  }

}
