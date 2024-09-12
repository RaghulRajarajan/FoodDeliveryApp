import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../class/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  baseUrl:string="http://localhost:8990";
  constructor(private http:HttpClient) { }

  getAllInvoice(){
   return  this.http.get<Invoice[]>(`${this.baseUrl}/getAllInvoice`)
  }

  getInvoiceById(id:number){
    return this.http.get<Invoice>(`${this.baseUrl}/getInvoiceById/${id}`,);
  }
}
