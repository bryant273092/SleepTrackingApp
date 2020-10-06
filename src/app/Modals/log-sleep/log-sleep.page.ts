import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OvernightSleepData} from '../../data/overnight-sleep-data'

@Component({
  selector: 'app-log-sleep',
  templateUrl: './log-sleep.page.html',
  styleUrls: ['./log-sleep.page.scss'],
})
export class LogSleepPage implements OnInit {
  eventDate: Date;
  startTime: Date;
  endTime: Date;

  constructor(
    public modalController:ModalController,
    public storage: Storage
    ) { }

  ngOnInit() {
  }
  
  enterForm(){
    var overnight = new OvernightSleepData(this.startTime, this.endTime)
    var id = overnight.id.toString();

    this.storage.length().then((data) =>{
      if(data == 0){
        //initiate storage
        this.storage.set('overnight', JSON.stringify({}))
        this.storage.set('experience',JSON.stringify({}))
      }

    })
    this.storage.get('overnight').then((data) => {
      data = JSON.parse(data)
      data[id] = overnight
      this.storage.set('overnight' , JSON.stringify(data))
      this.dismiss()

    })
    

  }
  dismiss(){
    this.modalController.dismiss();

  }

}
