import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-after-register',
  templateUrl: './after-register.component.html',
  styleUrls: ['./after-register.component.css']
})
export class AfterRegisterComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private dialogRef: MatDialogRef<LoginComponent, AfterRegisterComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  Login() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {}
    });
  }

  Cancel() {
  this.dialogRef.close();
  }
}
