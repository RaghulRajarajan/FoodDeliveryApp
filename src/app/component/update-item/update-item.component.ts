import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../class/item';
import { ItemServiceService } from '../../service/item-service.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent  implements OnInit {
  
  id!: number;
  rid!: number;
  item!: Item;

  constructor(private router:Router, private itemService:ItemServiceService, private route:ActivatedRoute){};

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];


    console.log(this.id);

    this.item = new Item(this.id,'','',0,'');

    if(this.id!=-1){
      this.itemService.getItemById(this.id).subscribe(
        response => this.item = response
      )
    }
  }

  updateItem(): void {
      this.id = this.route.snapshot.params['id'];
      this.rid = this.route.snapshot.params['rid'];
      console.log(this.id)

      this.itemService.updateItemById(this.id,this.item).subscribe(
        data =>{
          this.router.navigate(['item',this.rid]);
        }
      )
  };

  


  //   console.log(this.id);

  //   this.item = new Item(this.id,'','',0,'');

  //   if(this.id!=-1){
  //     this.itemService.getItemById(this.id).subscribe(
  //       response => this.item = response
  //     )
  //   }
  // }

  // updateItem(): void {
  //     this.id = this.route.snapshot.params['id'];
  //     this.rid = this.route.snapshot.params['rid'];
  //     console.log(this.id)

  //     this.itemService.updateItemById(this.id,this.item).subscribe(
  //       data =>{
  //         this.router.navigate(['item',this.rid]);
  //       }
  //     )
  // };

}
