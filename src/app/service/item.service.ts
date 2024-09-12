import { Injectable } from '@angular/core';
import { Item } from '../class/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }
  retriveAllItem(){
    return this.http.get<Item[]>(`http://localhost:9999/getAllItems`);
  }

  getItemByRestId(id:number){
    return this.http.get<Item[]>(`http://localhost:9999/getItemByRestId/${id}`);
  }

  getItemById(id:number){
    return this.http.get<Item[]>(`http://localhost:9999/getItemById/${id}`); 

  }
  addItemToResById(id:Number,item:Item){
      return this.http.post<Item[]>(`http://localhost:9999/saveItemByRestId/${id}`,item);
    }

  assignItemToRestById(restId:number,itemId:number){
    return this.http.get<Item[]>(`http://localhost:9999/itemAssignedRestaurant/item/${itemId}/restaurant/${restId}`);
  }
}
