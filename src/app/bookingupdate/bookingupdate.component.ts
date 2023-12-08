import { Component,OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookingupdate',
  templateUrl: './bookingupdate.component.html',
  styleUrls: ['./bookingupdate.component.css']
})
export class BookingupdateComponent implements OnInit{

  booking:Booking=new Booking();
  msg:any="";

  constructor(private bookingService:BookingService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  bookingUpdate()
  {
    this.bookingService.updateBooking(this.booking).subscribe(data=>{this.msg=data;});
  }



}


