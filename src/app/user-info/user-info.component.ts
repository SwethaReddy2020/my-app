import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { User } from '../login/users';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SellerProfile } from '../model/SellerProfile';
import { OrderService } from '../core/services/order.service';
import { FeedBackSumary } from '../model/FeedBackSumary';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  sellerProfile!: SellerProfile;
  userIdRoute: string | null = "";
 /*  reviews = [
    { title: 'Amazing food!', description: 'Chef John Doe made the best pasta I have ever tasted. The sauce was perfectly balanced and the pasta was cooked al dente.', rating: 5 },
    { title: 'Good, but could be better', description: 'The steak was cooked well, but it lacked seasoning. Overall, it was a good meal.', rating: 3 },
    { title: 'Disappointing', description: 'I was not impressed with the food. The flavors were bland and the presentation was unappealing.', rating: 2 }
  ] */;
  reviewSummary!: FeedBackSumary
  constructor(private authenticationService: AuthenticationService,
      private route: ActivatedRoute,
      private titleService: Title,
      private orderService: OrderService
      ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.userIdRoute = params.get('userId');
      this.getCompleteUserProfile();
      this.getReview();
    });
  }
  getCompleteUserProfile() {
    this.authenticationService.getsellerProfile(this.userIdRoute ? this.userIdRoute : "" ).subscribe(data => (this.sellerProfile = data))
  }

  getReview() {
    if(this.userIdRoute) {
      this.orderService.getReviews(this.userIdRoute).subscribe(
        data => { (this.reviewSummary = data); }
      )
    }
    
  }
  getNotFilledCount(filledCount: number) {
    return 5 - filledCount;
  }

  arrayFromNumber(num: number): number[] {
    return Array(num).fill(0).map((x, i) => i);
  }

}
