import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../event';
import { EventService } from '../event.service';


@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

   events:Event[]=[];
   event:Event=new Event();
   constructor(private eventService:EventService){}

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents()
  {
    this.eventService.getEvents().subscribe(data=>{this.events=data;});
  }

}


