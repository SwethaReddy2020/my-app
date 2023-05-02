import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

 
  feedForm!: FormGroup;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: string,
    private dialogRef: MatDialogRef<MyorderComponent>) {}

  
  ngOnInit(): void {
    this.feedForm = this.fb.group({
      comment: ['', Validators.required],
      rating: ['', Validators.required],
  });
}


rating = 0;

setRating(value: number) {
  this.rating = value;
}

  add() {
    this.dialogRef.close({data: this.feedForm.value});
  }
}
