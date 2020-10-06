import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoggedDataPageRoutingModule } from './logged-data-routing.module';

import { LoggedDataPage } from './logged-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoggedDataPageRoutingModule
  ],
  declarations: [LoggedDataPage]
})
export class LoggedDataPageModule {}
