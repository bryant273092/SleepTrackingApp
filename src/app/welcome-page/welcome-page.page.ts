import { Component, OnInit } from '@angular/core';
import { SleepService} from '../services/sleep.service'
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LogDataPage } from '../Modals/log-data/log-data.page';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {

  constructor(
    public sleepService:SleepService, 
    private storage: Storage, 
    public navCtrl: NavController,
    public modalController: ModalController) { }

  viewData(){
    this.navCtrl.navigateForward("/logged-data")    
  }
  presentModal() {
		this.modalController.create({
		component: LogDataPage,
		componentProps: { name: "IN4MATX 133" }
		}).then((modal) => {
		modal.present();
		});
	}

  ngOnInit() {
  }

}
