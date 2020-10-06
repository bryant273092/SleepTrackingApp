import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogExperiencePage } from './log-experience.page';

const routes: Routes = [
  {
    path: '',
    component: LogExperiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogExperiencePageRoutingModule {}
