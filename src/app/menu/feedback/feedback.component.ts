import { Component } from '@angular/core';

interface FeedbackFormData {
  name: string;
  email: string;
  feedback: string;
  rating: number;
}

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
