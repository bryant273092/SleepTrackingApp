import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { LogDataPage } from './Modals/log-data/log-data.page';
import { LogExperiencePage } from './Modals/log-experience/log-experience.page';
import { LogSleepPage } from './Modals/log-sleep/log-sleep.page';

@NgModule({
  declarations: [AppComponent,LogDataPage, LogExperiencePage, LogSleepPage],
  entryComponents: [LogDataPage, LogExperiencePage, LogSleepPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  IonicStorageModule.forRoot(), FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
