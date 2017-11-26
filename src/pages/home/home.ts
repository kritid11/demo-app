import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';


import { ListPage } from '../list/list';
import { DashboardPage } from '../dashboard/dashboard';
import { UserDashboardPage } from '../user-dashboard/user-dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	userType:string;	

	constructor(public navCtrl: NavController) {
		this.userType='admin';
	}

	goToDashboard() {

		console.log('userType:',this.userType);
	 	if(this.userType=='admin'){
	 		this.navCtrl.push(DashboardPage);
	 	}else{
	 		this.navCtrl.push(UserDashboardPage);
	 	}

	 }
	
}
