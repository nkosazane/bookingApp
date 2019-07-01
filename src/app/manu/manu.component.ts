
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manu',
  templateUrl: './manu.component.html',
  styleUrls: ['./manu.component.scss']
})
export class ManuComponent implements OnInit {

  constructor(private router:Router) { }
  home()
  {
    this.router.navigateByUrl("");
  }
  about()
  {
    this.router.navigateByUrl("about");
  }
  contact()
  {
    this.router.navigateByUrl("contact");
  }
 
  payment()
  {
    this.router.navigateByUrl("payment");
  }

  ngOnInit() {
  }

}
