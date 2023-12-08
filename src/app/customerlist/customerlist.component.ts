import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer} from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  
  customers:Customer[]=[];
  constructor(private customerService:CustomerService){}

 ngOnInit(): void {

   this.getAllCustomers();
   
 }

 getAllCustomers()
 {
   this.customerService.getCustomers().subscribe(data=>{this.customers=data;});
 }

}

