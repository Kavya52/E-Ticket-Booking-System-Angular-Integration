import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdeleteComponent } from './customerdelete/customerdelete.component';

import { CreateeventComponent } from './createevent/createevent.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventdeleteComponent } from './eventdelete/eventdelete.component';

import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { PaymentupdateComponent } from './paymentupdate/paymentupdate.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { PaymentdeleteComponent } from './paymentdelete/paymentdelete.component';

import { CreatebookingComponent } from './createbooking/createbooking.component';
import { BookingupdateComponent } from './bookingupdate/bookingupdate.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BookingdeleteComponent } from './bookingdelete/bookingdelete.component';

const routes: Routes = [
  {path:'getcustomers',component:CustomerlistComponent},
  {path:'createcustomer',component:CreatecustomerComponent},
  {path:'updatecustomer',component:CustomerupdateComponent},
  {path:'deletecustomer',component:CustomerdeleteComponent},

  {path:'getevents',component:EventlistComponent},
  {path:'createevent',component:CreateeventComponent},
  {path:'updateevent',component:EventupdateComponent},
  {path:'deleteevent',component:EventdeleteComponent},

  {path:'getpayments',component:PaymentlistComponent},
  {path:'createpayment',component:CreatepaymentComponent},
  {path:'updatepayment',component:PaymentupdateComponent},
  {path:'deletepayment',component:PaymentdeleteComponent},

  {path:'getbookings',component:BookinglistComponent},
  {path:'createbooking',component:CreatebookingComponent},
  {path:'updatebooking',component:BookingupdateComponent},
  {path:'deletebooking',component:BookingdeleteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }