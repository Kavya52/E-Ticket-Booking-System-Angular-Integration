import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {

   payments:Payment[]=[];
   payment:Payment=new Payment();
   constructor(private paymentService:PaymentService){}

  ngOnInit(): void {
    this.getAllPayments();
  }

  getAllPayments()
  {
    this.paymentService.getPayments().subscribe(data=>{this.payments=data;});
  }

}


