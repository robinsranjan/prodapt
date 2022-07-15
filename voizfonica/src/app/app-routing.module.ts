import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprepaidplanComponent } from './myComponents/addprepaidplan/addprepaidplan.component';
import { AdminDashboardComponent } from './myComponents/admin-dashboard/admin-dashboard.component';
import { AdminloginComponent } from './myComponents/adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './myComponents/adminregistration/adminregistration.component';
import { DongleComponent } from './myComponents/dongle/dongle.component';
import { HomeComponent } from './myComponents/home/home.component';
import { LoginComponent } from './myComponents/login/login.component';
import { PagenotfoundComponent } from './myComponents/pagenotfound/pagenotfound.component';
import { PostpaidComponent } from './myComponents/postpaid/postpaid.component';
import { PrepaidComponent } from './myComponents/prepaid/prepaid.component';
import { ServicePageComponent } from './myComponents/service-page/service-page.component';
import { SignupComponent } from './myComponents/signup/signup.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },


  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path:'home',
    component:HomeComponent
    
  },
  {
    path: 'prepaid',
    component: PrepaidComponent

  },
  {
    path: 'postpaid',
    component: PostpaidComponent

  },
  {
    path: 'dongle',
    component: DongleComponent

  },
  {
    path: 'service',
    component:  ServicePageComponent

  },


  {
    path: 'admin',
    component: AdminDashboardComponent

  },
  {
    path: "adminregister",
    component: AdminregistrationComponent
  },

  {
    path:"addprepaid",
    component:AddprepaidplanComponent
  },
  {
    path: "adminlogin",
    component: AdminloginComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
