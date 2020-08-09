import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {RegisterComponent} from '../register/register.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isPopupOpened = true;
 @Output() msg: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dialog?: MatDialog) {
  }

  ngOnInit(): void {
  }

  onRegister() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(RegisterComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  onLogin() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  Login() {
    this.msg.emit('Login First!');
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }
}
