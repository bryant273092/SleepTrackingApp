import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogDataPageRoutingModule } from './log-data-routing.module';

import { LogDataPage } from './log-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogDataPageRoutingModule
  ],
  declarations: [LogDataPage]
})
export class LogDataPageModule {}
