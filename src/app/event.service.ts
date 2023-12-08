import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{Event} from './event';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  private restUrl='http://localhost:8080'

  constructor(private httpClient:HttpClient) {}

  getEvents():Observable<Event[]>
  {
    return this.httpClient.get<Event[]>(`${this.restUrl}/getallevents`,{responseType:'json'});

  }

  saveEvent(event:Event):Observable<Object>
  {
    return this.httpClient.post(`${this.restUrl}/insertevents`,event,{responseType:"text"});
  }

  updateEvent(event:Event):Observable<Object>
  {
    return this.httpClient.put(`${this.restUrl}/updateevent`,event,{responseType:"text"});
  }

  

}