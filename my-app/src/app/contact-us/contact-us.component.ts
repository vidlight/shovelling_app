import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  submitted = false;

  constructor(
    private route: ActivatedRoute,
  ) { }

  onSubmit(){
    alert('Thanks for your Service Request');
    location.reload();
  }



  ngOnInit() {
  }

}
