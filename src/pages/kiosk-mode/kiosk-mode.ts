
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';




import { HomePage } from '../home/home';
import { UserDashboardPage } from '../user-dashboard/user-dashboard';

@Component({
  selector: 'page-kiosk-mode',
  templateUrl: 'kiosk-mode.html'
})

  export class KioskPage {

  	isSurveyStarted: boolean=false;
  	showThanks: boolean =false;
  	questionPages: Array<{question: string}>;
  	answerPages: Array<{answers: Array<{answer: string}>}>;
  	questionIndex: number;
  	showQuestionnaire: boolean=false;

	constructor(public navCtrl: NavController) {
		this.questionIndex=-1;
		this.questionPages = [
	      { question: 'How was the food served?' },
	      { question: 'How would you rate ambience?' },
	      { question: 'How was the hotel staff?' }
	    ];
	    this.answerPages=[
	      { answers: [
		      { answer: 'Good' },
		      { answer: 'Ok' },
		      { answer: 'Bad' }
	      ]},
	      { answers: [
		      { answer: 'Peaceful' },
		      { answer: 'Noisy' },
		      { answer: 'Ok' }
	      ]},
	      { answers: [
		      { answer: 'Polite' },
		      { answer: 'Efficient' },
		      { answer: 'Rude' }
	      ]}
	    ];
	    console.log('this.questionIndex:',this.questionIndex);
	}

	stopKioskMode(){		
		this.navCtrl.push(UserDashboardPage);
	}

	startSurvey(){
		this.isSurveyStarted=true;	
		this.questionIndex=-1;  	
	}

	goToNextQuestion(){
		if(this.questionPages.length-1==this.questionIndex){
			this.showThanks=true;
			setTimeout(() => {
		      this.showThanks = false;
		      this.isSurveyStarted=false;
		    }, 3000);
		}else{
			this.questionIndex++;
			this.showQuestionnaire=true;
		}
	}

	goToPreviousQuestion(){
		
		if(this.questionIndex==0){
			this.showQuestionnaire=false;		
			
		}
		this.questionIndex--;
		
	}

}
