import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindataComponent } from './admindata/admindata.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  { path: '', component:MainpageComponent},
  { path:'bookdetails', component:BookdetailsComponent},
  { path:'enrollment',component:EnrollmentComponent},
  { path:'admindata',component:AdmindataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
