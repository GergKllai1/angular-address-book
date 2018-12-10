import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() contact: any;

  constructor() { }

  ngOnInit() {
    this.contact = {
      name: ``,
      email: ``,
      company: ``,
      role: ``,
      twitter: ``,
      location: ``,
      notes: ``,
    };
  }

}
