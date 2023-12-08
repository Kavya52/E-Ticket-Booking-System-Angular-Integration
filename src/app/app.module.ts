import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { CustomerdeleteComponent } from './customerdelete/customerdelete.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EventlistComponent } from './eventlist/eventlist.component';
import { CreateeventComponent } from './createevent/createevent.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';
import { EventdeleteComponent } from './eventdelete/eventdelete.component';

import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { PaymentupdateComponent } from './paymentupdate/paymentupdate.component';
import { PaymentdeleteComponent } from './paymentdelete/paymentdelete.component';

import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { CreatebookingComponent } from './createbooking/createbooking.component';
import { BookingupdateComponent } from './bookingupdate/bookingupdate.component';
import { BookingdeleteComponent } from './bookingdelete/bookingdelete.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    CreatecustomerComponent,
    CustomerupdateComponent,
    CustomerdeleteComponent,
    EventlistComponent,
    CreateeventComponent,
    EventupdateComponent,
    EventdeleteComponent,
    PaymentlistComponent,
    CreatepaymentComponent,
    PaymentupdateComponent,
    PaymentdeleteComponent,
    BookinglistComponent,
    CreatebookingComponent,
    BookingupdateComponent,
    BookingdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
