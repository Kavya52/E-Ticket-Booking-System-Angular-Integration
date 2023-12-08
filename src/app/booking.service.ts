import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{Booking} from './booking';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private restUrl='http://localhost:8080'

  constructor(private httpClient:HttpClient) {}

  getBookings():Observable<Booking[]>
  {
    return this.httpClient.get<Booking[]>(`${this.restUrl}/getallbookings`,{responseType:'json'});

  }

  saveBooking(booking:Booking):Observable<Object>
  {
    return this.httpClient.post(`${this.restUrl}/insertbooking`,booking,{responseType:"text"});
  }

  updateBooking(booking:Booking):Observable<Object>
  {
    return this.httpClient.put(`${this.restUrl}/updatebooking`,booking,{responseType:"text"});
  }

  

}
