import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {UserDashboardComponent} from '../pages/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user-dashboard', component: UserDashboardComponent}
]
;

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
