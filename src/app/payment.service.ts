import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{Payment} from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private restUrl='http://localhost:8080'

  constructor(private httpClient:HttpClient) {}

  getPayments():Observable<Payment[]>
  {
    return this.httpClient.get<Payment[]>(`${this.restUrl}/getallpayments`,{responseType:'json'});

  }

  savePayment(payment:Payment):Observable<Object>
  {
    return this.httpClient.post(`${this.restUrl}/insertpayments`,payment,{responseType:"text"});
  }

  updatePayment(payment:Payment):Observable<Object>
  {
    return this.httpClient.put(`${this.restUrl}/updatepayment`,payment,{responseType:"text"});
  }

 

}
