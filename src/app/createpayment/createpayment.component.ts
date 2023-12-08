import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'app-createpayment',
  templateUrl: './createpayment.component.html',
  styleUrls: ['./createpayment.component.css']
})
export class CreatepaymentComponent implements OnInit {

  constructor(private paymentService:PaymentService){}

  payment:Payment=new Payment();
  msg:any="";

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    

  createPayment()
  {
    this.paymentService.savePayment(this.payment).subscribe(data=>{this.msg=data;});
  }

}


