import { Component,OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'app-paymentupdate',
  templateUrl: './paymentupdate.component.html',
  styleUrls: ['./paymentupdate.component.css']
})
export class PaymentupdateComponent implements OnInit{

  payment:Payment=new Payment();
  msg:any="";

  constructor(private paymentService:PaymentService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  paymentUpdate()
  {
    this.paymentService.updatePayment(this.payment).subscribe(data=>{this.msg=data;});
  }



}




