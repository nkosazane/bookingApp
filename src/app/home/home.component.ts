import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  radio:string ;
  drop:string;
  drop1:string;
  date1:number;
  date2:number;
  constructor(private home:Router) { }
  submit()
  {
    this.home.navigateByUrl("about")
  }
book(){

  this.home.navigate(['/payment'], {queryParams:{radio: this.radio, drop: this.drop, drop1: this.drop1, date1: this.date1, date2: this.date2}})

  // console.log(this.radio)
  // console.log(this.drop)
  // console.log(this.drop1)
  // console.log(this.date1)
  // console.log(this.date2)


 // this.home.navigateByUrl("payment")
}
  ngOnInit() {
  }

}
