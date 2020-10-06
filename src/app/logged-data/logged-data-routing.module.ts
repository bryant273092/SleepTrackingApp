import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedDataPage } from './logged-data.page';

const routes: Routes = [
  {
    path: '',
    component: LoggedDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedDataPageRoutingModule {}
