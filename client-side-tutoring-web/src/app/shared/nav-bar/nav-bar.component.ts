import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookPageComponent } from '../../book-page/book-page.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})


export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  animal!: string;
  name!: string;

  ngOnInit(): void {
  }


  
   

  n(){
    const dialogRef = this.dialog.open(BookPageComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}


// @Component({
//   selector: 'apppointmentDialog',
//   templateUrl: 'apppointmentDialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

// }