import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AfterRegisterComponent} from '../after-register/after-register.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public _contactForm: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog,
              private dialogRef: MatDialogRef<RegisterComponent, AfterRegisterComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {

    this._contactForm = this._formBuilder.group({
      ID: [this.data.ID],
      FirstName: [this.data.FirstName, [Validators.required]],
      LastName: [this.data.LastName, [Validators.required]],
      Contact: [this.data.Contact, [Validators.required]],
      Email: [this.data.Email, [Validators.required]],
      password: [this.data.password, [Validators.required]],
      cpassword: [this.data.cpassword, [Validators.required]],

    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (isNaN(this.data.ID)) {
      console.log(this._contactForm.value);
      const dialogRef = this.dialog.open(AfterRegisterComponent, {
        data: {}
      });
      this.dialogRef.close();
    }
  }
}
