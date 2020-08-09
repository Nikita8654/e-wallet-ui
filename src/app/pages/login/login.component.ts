import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() msg: string;
  public contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog,
              private dialogRef: MatDialogRef<LoginComponent, RegisterComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      Contact: [this.data.Contact, [Validators.required]],
      password: [this.data.password, [Validators.required]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (isNaN(this.data.ID)) {
      console.log(this.contactForm.value);
      this.dialogRef.close();
    }
  }

  onRegister() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(RegisterComponent, {
      data: {}
    });
  }
}
