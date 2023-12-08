import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit{

   bookings:Booking[]=[];
   booking:Booking=new Booking();
   constructor(private bookingService:BookingService){}

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings()
  {
    this.bookingService.getBookings().subscribe(data=>{this.bookings=data;});
  }

}


