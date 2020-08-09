import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HomeComponent} from './pages/home/home.component';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AfterRegisterComponent } from './pages/after-register/after-register.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AfterRegisterComponent,
    UserDashboardComponent,
    ProfileComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MDBBootstrapModule.forRoot(),
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        FormsModule,
        MatTabsModule,
        MatCheckboxModule,
        MatGridListModule,
        MatToolbarModule,
        AppRoutingModule

    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RegisterComponent]
})
export class AppModule {
}
