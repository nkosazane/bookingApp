import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';
import { ManuComponent } from './manu/manu.component';

const routes: Routes = [{path:"",component:ManuComponent,children:[ {path:"",component:HomeComponent},
{path:"contact",component:ContactComponent},
{path:"about",component:AboutComponent},
{path:"payment",component:PaymentComponent}
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
