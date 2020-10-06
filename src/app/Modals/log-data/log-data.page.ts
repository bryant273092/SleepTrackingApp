import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LogSleepPage } from '../log-sleep/log-sleep.page';
import { LogExperiencePage } from '../log-experience/log-experience.page'



@Component({
  selector: 'app-log-data',
  templateUrl: './log-data.page.html',
  styleUrls: ['./log-data.page.scss'],
})
export class LogDataPage implements OnInit {

	constructor(public modalController: ModalController) { }
	datalist = [];
	ngOnInit() {
	}
	experienceModal() {
		this.modalController.create({
		component: LogExperiencePage,
		componentProps: { name: "Log Experience"}
		}).then((modal) => {
			modal.present();
		});
  }
  
  	sleepModal() {
		this.modalController.create({
		component: LogSleepPage,
		componentProps: { name: "Log Sleep" }
		}).then((modal) => {
		modal.present();
		});
	}
	dismiss(){
		this.modalController.dismiss()
	}

}
