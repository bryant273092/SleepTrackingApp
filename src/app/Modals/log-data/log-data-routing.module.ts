import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogDataPage } from './log-data.page';

const routes: Routes = [
  {
    path: '',
    component: LogDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogDataPageRoutingModule {}
