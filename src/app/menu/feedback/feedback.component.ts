import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderService } from 'src/app/core/services/order.service';
import { FeedbackFormData } from 'src/app/model/feedback';
import { MyorderComponent } from 'src/app/order/myorder/myorder.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

 

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: string,
    private dialogRef: MatDialogRef<MyorderComponent>) {}

  
  ngOnInit(): void {
   
}


rating = 0;

setRating(value: number) {
  this.rating = value;
}

  add() {
    this.dialogRef.close({data: {comment: "dsads", rating: 2}});
  }
}
