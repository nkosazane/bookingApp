import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
name:string;
cardno:number;
cvc:number;
expary:number;

@Input() radio:string ;
@Input() drop:string;
@Input() drop1:string;
@Input() date1:number;
@Input() date2:number;

  constructor(private router:ActivatedRoute) { }
  
  ngOnInit() {
    this.router.queryParams.subscribe( data => {console.log(data);

      this.radio = data.radio, this.drop = data.drop, this.drop1 = data.drop1, this.date1 = data.date1, this.date2 = data.date2
      
      console.log(this.radio, this.drop, this.drop1, this.date1, this.date2);
      });
      
  }
  pay(){

    console.log(this.name)
    console.log(this.cardno)
    console.log(this.cvc)
    console.log(this.expary)
    
    alert("you have successfully purchase your ticket");
  }

}
