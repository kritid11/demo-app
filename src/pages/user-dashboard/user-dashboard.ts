import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';


import { HomePage } from '../home/home';
import { KioskPage } from '../kiosk-mode/kiosk-mode';

@Component({
  selector: 'page-user-dashboard',
  templateUrl: 'user-dashboard.html'
})

  export class UserDashboardPage {
    constructor(public navCtrl: NavController) {
  }

  goToKioskMode() {
      this.navCtrl.push(KioskPage);
  }

  syncToServer(){
  	alert('Please wait.. while feedback is getting stored in Server');
  }

  logout() {
    this.navCtrl.push(HomePage);
  }

}
