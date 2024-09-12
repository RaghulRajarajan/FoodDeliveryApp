import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../class/item';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  constructor(private http:HttpClient) { }

  retriveAllItem(){
    return this.http.get<Item[]>(`http://localhost:9999/getAllItems`);
  }

  getItemByRestId(id:number){
    return this.http.get<Item[]>(`http://localhost:9999/getItemByRestId/${id}`);

  }
  saveItem(item:any){
    return this.http.post(`http://localhost:9999/saveItem`,item);
  }

  saveItemByRestId(id:number, item:any){
    return this.http.post(`http://localhost:9999/saveItemByRestIdi/${id}`,item);
  }

  updateItemById(id:number,item:Item){
    return this.http.put<Item>(`http://localhost:9999/updateItemById/${id}`,item);
  }

  deleteItem(id:number,rid:number){
    return this.http.delete<Item[]>(`http://localhost:9999/deleteItemById/${id}/${rid}`);
  }

  getItemById(id:number){
    return this.http.get<Item>(`http://localhost:9999/getItemById/${id}`);
  }
}
