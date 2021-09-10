import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  onSubmit(){
    alert('Thanks for your Service Request');
    location.reload();
  }

  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
  }

}
