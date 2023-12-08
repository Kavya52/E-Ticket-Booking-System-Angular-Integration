import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event} from '../event';
import { EventService } from '../event.service';


@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {

  constructor(private eventService:EventService){}

  event:Event=new Event();
  msg:any="";

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    

  createEvent()
  {
    this.eventService.saveEvent(this.event).subscribe(data=>{this.msg=data;});
  }

}


