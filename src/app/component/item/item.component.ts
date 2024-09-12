import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../class/item';
import { ItemServiceService } from '../../service/item-service.service';
import { Restaurant } from '../restaurants/restaurants.component';
import { HardcodedAuthenticationService } from '../../service/hardcoded-authentication.service';
import { CartService } from '../../service/cart.service';
import { ItemService } from '../../service/item.service';
import { MatDialog } from '@angular/material/dialog';
import { PreviousOrderrestaurantComponent } from '../previous-orderrestaurant/previous-orderrestaurant.component';
import { OrderService } from '../../service/order.service';
import { QuantityComponent } from '../quantity/quantity.component';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  p: number = 1;
  count: number = 6;
  id!: number;
  intitalQuantity:number=1;
  items : Item[] = [];
  quantityDisable:boolean=false;
  cartID!: number;
  cartItem!: Item;
  email:any;
  customerid!: number;

  restaurant!: Restaurant;

  constructor(public hardcodedAuthentication:HardcodedAuthenticationService,
    private itemservice: ItemServiceService,
    private router:Router,
    private route:ActivatedRoute,
    private  cart:CartService,
    private item:ItemService,
    private matDialog: MatDialog,
    private orderService:OrderService) {
    console.log('Application loaded. Initializing data.');
  };


  ngOnInit(): void {
    
      this.email=  sessionStorage.getItem('authenticateduser');
    console.log(this.email);
    
    this.cart.getCartByEmail(this.email).subscribe((cartData: { id: number; cust: { customerid: number; }; })=>{
      this.cartID = cartData.id;
      this.customerid=cartData.cust.customerid;
      console.log(this.cartID);
      console.log(cartData);
    });
    
    
    this.id=this.route.snapshot.params['id'];
      this.itemservice.getItemByRestId(this.id).subscribe(
        (        data: Item[])=>{
          this.items=data;
          console.log(this.items);
        }
       )
  }

  

  addToCart(itemId:number): void {
    this.id=this.route.snapshot.params['id'];
    this.matDialog.open(QuantityComponent,{
      height:"30vh",
      width:"50vh",
      data:{itemId:itemId,restId:this.id,custID:this.customerid,cartId:this.cartID}
    })

    // this.itemservice.getItemById(id).subscribe(data=>{
    //   console.log(data);
    //   this.cartItem=data;  
      
    //   //geting item details
      
     

    //   this.cart.addItemToCart(this.cartID,data).subscribe(data1=>{   //asiging item to cartt
    //     console.log(data1);
    //     prompt( 
    //     );  
    //     this.orderService.saveOrder(this.customerid,data.rest.restid,data.itemid,this.cartID,this.intitalQuantity).subscribe(order=>{
    //       console.log(order);
    //     })
    //     this.item.assignItemToRestById(this.id,data.itemid).subscribe(updatedres=>{
    //       console.log(updatedres);
    //     })
    // })
    
    // })
  }

  updateItem(id:number): void {
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['updateItem',id,this.id]);
  }


  
  
  
  deleteItem(id:number): void {
    this.id=this.route.snapshot.params['id'];

    this.itemservice.deleteItem(id,this.id).subscribe(
      (      respose: Item[])=>{
        this.items=respose;
        console.log(this.items);
        // this.router.navigate(['item',this.id]);
      } 
    );
  }

  addItem(): void {
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['registerItem',this.id]);
  }

  viewOoders(){
    this.id = this.route.snapshot.params['id'];
    this.matDialog.open(PreviousOrderrestaurantComponent,{
      width:'120vh',
      height:'90vh',
      data:this.id
    })
  }
}
