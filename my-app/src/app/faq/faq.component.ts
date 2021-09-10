import { Component, OnInit } from '@angular/core';

import { questions } from '../questions';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  questions = questions;
  constructor() { }

  ngOnInit() {
  }

}
