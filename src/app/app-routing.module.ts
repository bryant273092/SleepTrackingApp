import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'welcome-page',
    loadChildren: () => import('./welcome-page/welcome-page.module').then( m => m.WelcomePagePageModule)
  },
  {
    path: 'logged-data',
    loadChildren: () => import('./logged-data/logged-data.module').then( m => m.LoggedDataPageModule)
  },
  {
    path: 'log-data',
    loadChildren: () => import('./Modals/log-data/log-data.module').then( m => m.LogDataPageModule)
  },
  {
    path: 'log-experience',
    loadChildren: () => import('./Modals/log-experience/log-experience.module').then( m => m.LogExperiencePageModule)
  },
  {
    path: 'log-sleep',
    loadChildren: () => import('./Modals/log-sleep/log-sleep.module').then( m => m.LogSleepPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
