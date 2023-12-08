export class Payment {
    paymentId:Number=0;
    paymentMode:String="";
    paymentDate:String="";
    
    customer:{customerId:Number}={customerId:0};
    booking:{bookingId:Number}={bookingId:0};

    constructor(){}
}
