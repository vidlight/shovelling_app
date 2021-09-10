import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Review } from '../review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  rating = ['5', '4', '3', '2', ' 1'];
  service = ['','Side Walk and Doorway Cleaning', 'Driveway Cleaning', 'Patio Cleaning', 'Roof Cleaning']

  model = new Review('', '', '','');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
  }

}
