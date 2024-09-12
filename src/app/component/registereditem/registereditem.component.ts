import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemServiceService } from '../../service/item-service.service';



@Component({
  selector: 'app-registereditem',
  templateUrl: './registereditem.component.html',
  styleUrls: ['./registereditem.component.css']
})
export class RegistereditemComponent implements OnInit {
  id!: number;

  // items : Item[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private data:ItemServiceService){};

  registrationForm = new FormGroup({
    itemname : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+$')]),
    itemstatus : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+$')]),
    itemcost : new FormControl('', [Validators.required]),
    itemimage : new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    // this.id=this.route.snapshot.params['id'];

    // this.data.getItemByRestId(this.id).subscribe(
    //   response=>{
      
    //   console.log(response);
    //   this.items=response;
    //   }
    //  )
  }

  saveItem(): void {

    this.id=this.route.snapshot.params['id'];

    console.log(this.registrationForm.value)

    const Items = {
      itemname : this.registrationForm.value.itemname,
      itemstatus : this.registrationForm.value.itemstatus,
      itemcost : this.registrationForm.value.itemcost,
      itemimage : this.registrationForm.value.itemimage,
    };

    this.data.saveItemByRestId(this.id,Items).subscribe(
      (response:any) => {
        console.log(response);
        this.router.navigate(['item',this.id]);
      },

      (error:any) => {
        console.log(error);
      }
    )

    // this.data.saveItem(Items).subscribe(
    // (response : any) => {
    //   console.log(response);
    // },
    // (error:any) => {
    //       console.log(error);
    //     }
    //   )
  }
  get itemname() {
    return this.registrationForm.get('itemname');
  }
  get itemstatus() {
    return this.registrationForm.get('itemstatus');
  }
  get itemcost() {
    return this.registrationForm.get('itemcost');
  }
  get itemimage() {
    return this.registrationForm.get('itemimage');
  }
}