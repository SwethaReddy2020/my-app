import { Component } from '@angular/core';
import { FeedbackFormData } from 'src/app/model/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  formData: FeedbackFormData = {
    name: '',
    email: '',
    feedback: '',
    rating: 0
  };

  setRating(rating: number) {
    this.formData.rating = rating;
  }

  onSubmit() {
    // Submit the form data to your backend or store it locally
    console.log(this.formData);
  }
}
