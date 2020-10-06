import { Component, OnInit } from '@angular/core';
import { ModalController} from'@ionic/angular';
import { StanfordSleepinessData} from '../../data/stanford-sleepiness-data';
import { Storage} from '@ionic/storage'

@Component({
  selector: 'app-log-experience',
  templateUrl: './log-experience.page.html',
  styleUrls: ['./log-experience.page.scss'],
})
export class LogExperiencePage implements OnInit {

  eventtime: Date;
  experience: number;

  constructor( 
    public modalController: ModalController,
    public storage: Storage) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss()
  }
  enterForm(){
    var experience = new StanfordSleepinessData(this.experience)
    var id = experience.loggedAt.toString();

    this.storage.length().then((data) =>{
      if(data == 0){
        //initiate storage
        this.storage.set('overnight', JSON.stringify({}))
        this.storage.set('experience',JSON.stringify({}))
      }

    })
    this.storage.get('experience').then((data) => {
      data = JSON.parse(data)
      data[id] = experience
      this.storage.set('experience' , JSON.stringify(data))
      this.dismiss()

    })
  }

}
