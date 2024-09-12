import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {

  intitalQuantity:number=1;
  constructor( @Inject (MAT_DIALOG_DATA) public data:any,
  private matdialogref:MatDialogRef<QuantityComponent>,
  private orderservice:OrderService
  ) { }

  ngOnInit(): void {
  }

  addToCart(){
    console.log(this.data);
    
    this.orderservice.saveOrder(this.data.custID,this.data.restId,this.data.itemId,this.data.cartId,this.intitalQuantity).subscribe(order=>{
      console.log(order);
    })
    alert("item with quantity "+this.intitalQuantity+" is added to cart");
    this.matdialogref.close();


  }

  close(){
    this.matdialogref.close();
  }
  increase(){
    this.intitalQuantity++;
    }
    decrease(){
      this.intitalQuantity--;
    }
}
