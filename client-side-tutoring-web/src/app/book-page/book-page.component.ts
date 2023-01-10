import { Component, OnInit, Inject } from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EmailServiceService} from './email-service.service';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  

  constructor(private _formBuilder: FormBuilder,    public dialogRef: MatDialogRef<BookPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private  emaiLService : EmailServiceService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();

  }

  submitApplication(){
    
    // this.emaiLService.sendEmail();

    this.emaiLService.sendEmail().subscribe(data => {
  
    })
  }

}
