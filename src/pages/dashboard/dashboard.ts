import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';


import { HomePage } from '../home/home';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})

  export class DashboardPage {
    constructor(public navCtrl: NavController) {
  }



  logout() {
      this.navCtrl.push(HomePage);
   }

}
