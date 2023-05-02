import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OrderService } from 'src/app/core/services/order.service';
import { FeedbackFormData } from 'src/app/model/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

 

  constructor(private fb: FormBuilder,
  private orderService: OrderService) {}

  
  ngOnInit(): void {
   
}


rating = 0;

setRating(value: number) {
  this.rating = value;
}

  add() {
    // Submit the form data to your backend or store it locally
    console.log();
  }
}
