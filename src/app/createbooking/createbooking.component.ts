import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking} from '../booking';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrls: ['./createbooking.component.css']
})
export class CreatebookingComponent implements OnInit {

  constructor(private bookingService:BookingService){}

  booking:Booking=new Booking();
  msg:any="";

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    

  createBooking()
  {
    this.bookingService.saveBooking(this.booking).subscribe(data=>{this.msg=data;});
  }

}


