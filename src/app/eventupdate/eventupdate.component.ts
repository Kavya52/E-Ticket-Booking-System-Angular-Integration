import { Component,OnInit } from '@angular/core';
import {Event } from '../event';
import { EventService } from '../event.service';


@Component({
  selector: 'app-eventupdate',
  templateUrl: './eventupdate.component.html',
  styleUrls: ['./eventupdate.component.css']
})
export class EventupdateComponent implements OnInit {

 event:Event=new Event();
  msg:any="";

  constructor(private eventService:EventService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  eventUpdate()
  {
    this.eventService.updateEvent(this.event).subscribe(data=>{this.msg=data;});
  }



}

